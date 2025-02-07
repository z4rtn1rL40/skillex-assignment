import { ConfigModuleOptions } from '@nestjs/config';
import * as joi from 'joi';

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: joi.object({
    PORT: joi.string().required(),
    DB_NAME: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_HOST: joi.string().required(),
    DB_PORT: joi.string().required(),
  }),
};
