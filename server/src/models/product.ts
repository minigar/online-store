import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductBodyModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  quantity: number;

  imgUrl: string;
}
