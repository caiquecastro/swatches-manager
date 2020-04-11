import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSwatchDto } from './dto/create-swatch.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Swatch } from './swatch.entity';
import { Repository } from 'typeorm';
import { UpdateSwatchDto } from './dto/update-swatch.dto';

@Injectable()
export class SwatchesService {
  constructor(
    @InjectRepository(Swatch)
    private swatchRepository: Repository<Swatch>,
  ) {}

  findAll(): Promise<Swatch[]> {
    return this.swatchRepository.find();
  }

  async findOne(id: number): Promise<Swatch> {
    const swatch = await this.swatchRepository.findOne(id);

    if (!swatch) {
      throw new NotFoundException('Could not found swatch');
    }

    return swatch;
  }

  create(createSwatchDto: CreateSwatchDto): Promise<Swatch> {
    const { name, price, image, color } = createSwatchDto;

    const swatch = new Swatch();
    swatch.name = name;
    swatch.price = price;
    swatch.image = image;
    swatch.color = color;
    swatch.date = new Date();
    swatch.active = true;

    return this.swatchRepository.save(swatch);
  }

  async update(id: number, updateSwatchDto: UpdateSwatchDto): Promise<Swatch> {
    const { price, image, active } = updateSwatchDto;

    const swatch = await this.findOne(id);
    swatch.price = price;
    swatch.image = image;
    swatch.active = active;

    return this.swatchRepository.save(swatch);
  }

  async remove(id: number): Promise<void> {
    const swatch = await this.findOne(id);

    await this.swatchRepository.remove(swatch);
  }
}
