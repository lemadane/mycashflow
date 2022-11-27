import { Router, Request, Response } from 'express';
import { RegistrationEntry } from '../interfaces';
import * as registrationValidator from '../validators/registration.validator';

const UserController = Router();

UserController.post('/register', (req: Request, res: Response) => {
   registrationValidator.validate(<RegistrationEntry>req.body);
});

export default UserController;
