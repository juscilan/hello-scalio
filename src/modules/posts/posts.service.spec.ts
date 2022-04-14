import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    postsService = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(postsService).toBeDefined();
  });

  describe('getPosts', () => {
    it('should return all posts from array', () => {
      const response = postsService.getPosts();
      expect(response.length).toBe(10);
    });
  });

  describe('getPostById', () => {
    it('should return a post id three', () => {
      const response = postsService.getPostById(3);
      expect(response.title).toBe(
        'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      );
      expect(response.body).toBe(
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      );
    });
  });
});
