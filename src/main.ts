import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// posts, comments, user, products, order

// Module - PostController, PostService
// Controller 
// Service


// localhost:3000/