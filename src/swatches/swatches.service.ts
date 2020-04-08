import { Injectable } from '@nestjs/common';
import { Swatch } from './interfaces/swatch.interface';

@Injectable()
export class SwatchesService {
    private readonly swatches = [
        {
            active: true,
            name: 'My Swatch',
            price: '$10',
            image: 'url to image',
            color: '#467654',
            date: new Date('2020-04-07T22:48:00.698Z'),
        },
    ];

    findAll(): Promise<Swatch[]> {
        return new Promise((resolve) => {
            resolve(this.swatches);
        });
    }
}
