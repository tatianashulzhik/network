import { Test, TestingModule } from '@nestjs/testing';
import { MainProfileController } from './main-profile.controller';

describe('MainProfileController', () => {
  let controller: MainProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainProfileController],
    }).compile();

    controller = module.get<MainProfileController>(MainProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
