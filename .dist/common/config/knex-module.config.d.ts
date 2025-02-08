import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModuleOptions } from 'nest-knexjs';
export declare const KnexModuleConfig: {
    import: (typeof ConfigModule)[];
    inject: (typeof ConfigService)[];
    useFactory: (configService: ConfigService) => KnexModuleOptions;
};
