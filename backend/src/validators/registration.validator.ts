import { Joi } from 'express-validation';
import { RegistrationEntry } from '../interfaces';

export const validate = (entry: RegistrationEntry) => {
   const schema = Joi.object({
      firstname: Joi.string().required(),
      middlename: Joi.string().required(),
      lastname: Joi.string().required(),
      birthdate: Joi.date().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().required(),
   });
   const { error } = schema.validate(entry);
   if (error) {
      throw { ...error, status: 422 };
   }
};
