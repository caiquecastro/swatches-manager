import { Injectable } from '@nestjs/common';
import { CreateSwatchDto } from './dto/create-swatch.dto';
import { SwatchRepository } from './swatch.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Swatch } from './swatch.entity';

@Injectable()
export class SwatchesService {
    constructor(
        @InjectRepository(SwatchRepository)
        private swatchRepository: SwatchRepository
    ) {}

    findAll(): Promise<Swatch[]> {
        return this.swatchRepository.find();
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
}
