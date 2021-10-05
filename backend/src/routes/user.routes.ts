import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post( (req, res) => {
    new UserController().login(req, res);
} );

userRouter.route('/registerOrganization').post((req, res) => {
    new UserController().registerOrganization(req, res);
});

userRouter.route('/registerAdmin').post((req, res) => {
    new UserController().registerAdmin(req, res);
});

userRouter.route('/updateUsername').put((req, res) => {
    new UserController().updateUsername(req, res);
});

userRouter.route('/updatePassword').put((req, res) => {
    new UserController().updatePassword(req, res);
});

userRouter.route('/updateEmail').put((req, res) => {
    new UserController().updateEmail(req, res);
});

export default userRouter;