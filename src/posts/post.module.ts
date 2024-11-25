import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';


@Module({
  imports: [],
  controllers: [PostController],
  // providers - всё, что имеет декоратор @Injectable (всегда все сервисы)
  providers: [PostService],
})
export class PostModule {}
