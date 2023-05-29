import { NestFactory } from '@nestjs/core';
import { Api2Module } from './api2.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(Api2Module);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api2');

  await app.listen(configService.get('API2_PORT'), '0.0.0.0');
}
bootstrap();
