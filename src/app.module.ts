import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/post.module';
import { TodoModule } from './todo/todo.module';



// Все сервисы и контроллеры стекаются в свои модули
// Все модули стекаются в AppModule
@Module({
  imports: [PostModule, TodoModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}

