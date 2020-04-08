import { Test, TestingModule } from '@nestjs/testing';
import { SwatchesService } from './swatches.service';

describe('SwatchesService', () => {
  let service: SwatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwatchesService],
    }).compile();

    service = module.get<SwatchesService>(SwatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
