import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserBodyModel {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
