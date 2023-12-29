import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProdInputDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  productId: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
