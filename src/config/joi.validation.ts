import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.optional().default(
    'mongodb://192.168.100.92:27017/nest-pokemon',
  ),
  PORT: Joi.number().default(3000),
});
