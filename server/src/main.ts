import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';

const APP_PORT = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  app.use(bodyParser.json({ limit: '50mb' }));

  app.enableCors();

  await app.listen(APP_PORT);
  Logger.log(`Server has been started at ${APP_PORT} port!`);
}

bootstrap();
