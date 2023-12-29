import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateProdOutputDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  productId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
