import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  enterprise: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  passwd: string;
}
