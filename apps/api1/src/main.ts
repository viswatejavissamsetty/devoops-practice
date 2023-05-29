import { NestFactory } from '@nestjs/core';
import { Api1Module } from './api1.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(Api1Module);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api1');

  await app.listen(configService.get('API1_PORT'), '0.0.0.0');
}
bootstrap();
