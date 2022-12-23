import { IsNotEmpty, IsNumber, IsNumberString, IsString, IsUrl } from "class-validator";
export interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity?: number;
  imgUrl: string;
}
export class CreateProduct {
  @IsNumber()
  id?: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumberString()
  price: number;

  @IsNotEmpty()
  @IsNumberString()
  quantity: number;

  @IsUrl()
  imgUrl: string;
}