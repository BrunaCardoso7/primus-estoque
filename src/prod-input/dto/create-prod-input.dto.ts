import { IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProdInputDto {
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  productId: number;
  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
