import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { SwatchesService } from './swatches.service';
import { Swatch } from './swatch.entity';

describe('SwatchesService', () => {
  let service: SwatchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwatchesService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          username: 'swatches',
          password: 'swatches',
          entities: [Swatch],
        }),
        TypeOrmModule.forFeature([Swatch]),
      ],
    }).compile();

    service = module.get<SwatchesService>(SwatchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
