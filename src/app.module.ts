import { Module } from '@nestjs/common';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [PostsModule, ,],
  controllers: [],
  providers: [],
})
export class AppModule {}

// ServeStaticModule.forRoot({
//   rootPath: join(__dirname, '..', 'client'),
// })
