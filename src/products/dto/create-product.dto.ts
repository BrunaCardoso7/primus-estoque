import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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

  @IsInt()
  @IsPositive()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
