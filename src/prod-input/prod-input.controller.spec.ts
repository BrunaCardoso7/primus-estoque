import { Test, TestingModule } from '@nestjs/testing';
import { ProdInputController } from './prod-input.controller';
import { ProdInputService } from './prod-input.service';

describe('ProdInputController', () => {
  let controller: ProdInputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdInputController],
      providers: [ProdInputService],
    }).compile();

    controller = module.get<ProdInputController>(ProdInputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
