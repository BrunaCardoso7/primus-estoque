import { Test, TestingModule } from '@nestjs/testing';
import { ProdOutputController } from './prod-output.controller';
import { ProdOutputService } from './prod-output.service';

describe('ProdOutputController', () => {
  let controller: ProdOutputController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdOutputController],
      providers: [ProdOutputService],
    }).compile();

    controller = module.get<ProdOutputController>(ProdOutputController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
