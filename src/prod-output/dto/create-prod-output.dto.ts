import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateProdOutputDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  productId: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  quantity: number;
}
