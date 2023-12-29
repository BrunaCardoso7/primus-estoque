import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  suplier: string;

  @ApiProperty()
  @IsInt()
  @IsPositive()
  @IsNumber()
  @IsOptional()
  quantity: number;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  value: number;
}
