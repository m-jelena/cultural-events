import express from 'express';
import User from '../models/users';

export class UserController {
    login = (req: express.Request, res: express.Response) => {

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({"username": username, "password": password}, (err, user) => {
            if (err) console.log(err);
            else res.json(user);
        });
    }

    register = (req: express.Request, res: express.Response) => {
        User.findOne({"username": req.body.username}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                if (user == null) {
                    let newUser = new User(req.body);
                    newUser.save().then((newUser) => {
                        res.json({'message': 'ok'});
                    }).catch((err) => {
                        res.json({'message': 'not ok'});
                    });
                } else {
                    res.json({'message': 'busy'});
                }
            }
        });
    }

}