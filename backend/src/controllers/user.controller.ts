import express from "express";
import User, { Roles } from "../models/users/users";
import { Password } from "../common/password";
import Portal from "../models/portal/portal";
import { OrganizationController } from "./organization.controller";

export class UserController {

    login = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;

        User.findOne({ "username": username },
            (err, user) => {
                if(err) console.log(err);
                else if(!Password.compare(user.password, password)) 
                    res.status(401).json({ 'message': 'Wrong credentials.' });
                else res.json(user);
            });
    }

    register = (req: express.Request, res: express.Response) => {
        let newUser = new User(req.body);
        newUser.save().then((newUser) => {
            res.status(200).json({ 'message': 'ok' });
        }).catch((err) => {
            res.status(409).json({ 'message': 'not ok' });
        });
    }

    registerAdmin = (req: express.Request, res: express.Response) => {
        let newUser = new User( {
            'username': req.body.username,
            'password': req.body.password,
            'email': req.body.email,
            'role': Roles.Admin
        } );
        newUser.save().then((newAdmin) => {
            let admin = {
                'user': newAdmin._id,
                'name': {
                    'first_name': req.body.name.firstName,
                    'last_name': req.body.name.lastName
                },
                'contact_phone': req.body.contactPhone
            };
            Portal.collection.updateOne( {}, { $push: { 'admins': admin } } );
            res.status(200).json({ 'message': 'ok' });
        }).catch((err) => {
            res.status(409).json({ 'message': 'not ok' });
        });
    }

    registerOrganization = (req: express.Request, res: express.Response) => {
        let newUser = new User( {
            'username': req.body.username,
            'password': req.body.password,
            'email': req.body.email,
            'role': Roles.Organization
        } );
        newUser.save()
            .then((newOrganization) => new OrganizationController().registerOrganization(req, res, newOrganization._id.toString()))
            .catch((err) => {
                res.status(409).json({ 'message': 'busy' });
                console.log(err);
        });
    }

    updateUsername = (req: express.Request, res: express.Response) => {
        let oldUsername = req.body.oldUsername;
        let newUsername = req.body.newUsername;
        let user = User.findOne({ "username": newUsername });
        if(user)
            res.status(409).json({ 'message': 'Username must be unique.' });
        else 
            User.collection.updateOne({ "username": oldUsername }, { $set: { "username": newUsername } })
                .then(() => res.status(200).json({ 'message': 'ok' }))
                .catch((err) => res.status(501).json({ 'message': 'Something is wrong' }));
    }

    updatePassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let oldPassword = req.body.oldPassword;
        let newPassword = Password.toHash(req.body.newPassword);
        let user = User.findOne({ "username": username });
        if(user && Password.compare(user.get("password"), oldPassword))
            User.collection.updateOne({ "username": username }, { $set: { "password": newPassword } })
                .then(() => res.status(200).json({ 'message': 'ok' }))
                .catch((err) => res.status(501).json({ 'message': 'Something is wrong' }));
    }

    updateEmail = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let email = req.body.email;
        let user = User.findOne({ "email": email });
        if(user)
            res.status(409).json({ 'message': 'Email must be unique.' });
        else
            User.collection.findOneAndUpdate({ "username": username }, { $set: { "email": email } })
                .then((org) => {
                    if(org.value.role == Roles.Organization)
                        new OrganizationController().updateEmail(org.value._id.toString(), email, res);
                    else
                        res.status(200).json({ 'message': 'ok' });
                })
                .catch((err) => res.status(501).json({ 'message': 'Something is wrong' }));
    }
}