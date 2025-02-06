import { ConfigModuleOptions } from '@nestjs/config';
import * as joi from 'joi';

export const ConfigModuleConfig: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath: '.env',
  validationSchema: joi.object({
    PORT: joi.string().required(),
  }),
};
