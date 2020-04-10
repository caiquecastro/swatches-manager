import { IsNotEmpty } from 'class-validator';

export class CreateSwatchDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  color: string;
}
