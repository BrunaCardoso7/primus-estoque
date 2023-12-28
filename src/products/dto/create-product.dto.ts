import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  suplier: string;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
