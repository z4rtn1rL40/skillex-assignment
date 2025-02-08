"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexModuleConfig = void 0;
const config_1 = require("@nestjs/config");
exports.KnexModuleConfig = {
    import: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: (configService) => ({
        config: {
            client: 'mysql2',
            version: '5.7',
            useNullAsDefault: true,
            connection: {
                database: configService.get('DB_NAME'),
                user: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                host: configService.get('DB_HOST'),
                port: Number(configService.get('DB_PORT')),
                ssl: false,
            },
        },
    }),
};
//# sourceMappingURL=knex-module.config.js.map