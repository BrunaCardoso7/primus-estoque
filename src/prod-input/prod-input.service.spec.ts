import { Test, TestingModule } from '@nestjs/testing';
import { ProdInputService } from './prod-input.service';

describe('ProdInputService', () => {
  let service: ProdInputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdInputService],
    }).compile();

    service = module.get<ProdInputService>(ProdInputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
