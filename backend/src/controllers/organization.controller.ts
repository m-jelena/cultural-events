import express from "express";
import Organization from "../models/users/organizations";

export class OrganizationController {

    registerOrganization = (req: express.Request, res: express.Response, userId: string) => {
        let organization = new Organization( {
            'name': req.body.name,
            'web_address': req.body.webAddress,
            'contact_person': {
                'first_name': req.body.contactPerson.firstName,
                'last_name': req.body.contactPerson.lastName
            },
            'user': userId,
            'email': req.body.email,
            'address': {
                'street': req.body.address.street,
                'number': req.body.address.number,
                'city': req.body.address.city
            },
            'phones': req.body.phones,
            'description': req.body.description,
            'field': req.body.field
        });
        organization.save()
            .then(() => res.status(200).json({ 'message': 'ok' }))
            .catch((err) => res.status(409).json({ 'message': 'not ok' }));
    }

    updateEmail = (userId: string, email: string, res: express.Response) => {
        Organization.collection.updateOne({ "user": userId }, { $set: { "email": email } })
            .then(() => res.status(200).json({ 'message': 'ok' }))
            .catch((err) => res.status(501).json({ 'message': 'Something is wrong' }));
    }

    findAllOrganizations = (req: express.Request, res: express.Response) => {
        Organization.find( {}, (err, organizations) => {
            if(err) console.log(err);
            else res.json(organizations);
        });
    }

    updateOrganization = (req: express.Request, res: express.Response) => {
        let oldValue = req.body.name; // (old) unique value to search for
        
    }


}