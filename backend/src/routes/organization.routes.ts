import express from 'express';
import { OrganizationController } from '../controllers/organization.controller';

const organizationRouter = express.Router();

organizationRouter.route('/findAllOrganizations').get((req, res) => {
    new OrganizationController().findAllOrganizations(req, res);
});

organizationRouter.route('/updateOrganization').put((req, res) => {
    new OrganizationController().updateOrganization(req, res);
});

export default organizationRouter;