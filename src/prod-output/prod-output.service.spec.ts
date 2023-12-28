import { Test, TestingModule } from '@nestjs/testing';
import { ProdOutputService } from './prod-output.service';

describe('ProdOutputService', () => {
  let service: ProdOutputService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdOutputService],
    }).compile();

    service = module.get<ProdOutputService>(ProdOutputService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
