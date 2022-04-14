import { Controller, Get, Param } from '@nestjs/common';
import { PostResponse } from './interfaces/post-response.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): PostResponse[] {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: number): PostResponse {
    return this.postsService.getPostById(id);
  }
}
