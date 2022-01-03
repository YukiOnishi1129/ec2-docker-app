import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // APIのURLを全て「/api/v1」から始まるようにする
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}
bootstrap();
