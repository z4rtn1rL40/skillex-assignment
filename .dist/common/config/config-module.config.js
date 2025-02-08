"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigModuleConfig = void 0;
const joi = require("joi");
exports.ConfigModuleConfig = {
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
//# sourceMappingURL=config-module.config.js.map