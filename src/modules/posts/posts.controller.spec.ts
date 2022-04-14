import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

describe('PostsController', () => {
  let postsController: PostsController;

  let mockPostService = {
    getPosts: jest.fn(),
    getPostById: jest.fn(),
  };

  beforeEach(async () => {
    mockPostService = {
      getPosts: jest.fn(),
      getPostById: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: mockPostService,
        },
      ],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(postsController).toBeDefined();
  });

  describe('getPosts', () => {
    it('should be called one time', () => {
      postsController.getPosts();
      expect(mockPostService.getPosts).toBeCalledTimes(1);
    });
  });

  describe('getPostById', () => {
    it('should return ten positions on array', () => {
      postsController.getPostById(3);
      expect(mockPostService.getPostById).toBeCalledTimes(1);
      expect(mockPostService.getPostById).toBeCalledWith(3);
    });
  });
});
