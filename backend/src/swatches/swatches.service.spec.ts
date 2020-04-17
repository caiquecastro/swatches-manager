import { TypeOrmModule } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { SwatchesService } from './swatches.service';
import { Swatch } from './swatch.entity';

describe('SwatchesService', () => {
  let service: SwatchesService;

  beforeAll(async () => {
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

  it('should update swatch', async () => {
    const swatch = await service.create({
      name: 'Old name',
      price: '10',
      image: 'foo.jpg',
      color: '#000',
    });
    
    const updatedSwatch = await service.update(swatch.id, {
      name: 'New name',
      price: '10',
      image: 'foo.jpg',
      color: '#000',
      active: true,
    });

    expect(updatedSwatch.name).toBe('New name');
  });
});
