import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleConfig } from './common/config';

@Module({
  providers: [],
  controllers: [],
  imports: [ConfigModule.forRoot(ConfigModuleConfig)],
})
export class AppModule {}
