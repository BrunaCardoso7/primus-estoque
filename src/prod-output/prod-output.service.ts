import { Injectable } from '@nestjs/common';
import { CreateProdOutputDto } from './dto/create-prod-output.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFound } from 'src/erros';
import { ProductOutputCreateInput } from '@prisma/client';
@Injectable()
export class ProdOutputService {
  constructor(private prismaService: PrismaService) {}
  async create(createProdOutputDto: CreateProdOutputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createProdOutputDto.productId },
    });

    if (!product) {
      throw new NotFound(`Product not found in the database!`);
    }

    const data: ProductOutputCreateInput = {
      name: '',
      quantity: createProdOutputDto.quantity,
      productId: createProdOutputDto.productId,
    };

    const result = await this.prismaService.$transaction([
      this.prismaService.productOutput.create({
        data,
      }),
      this.prismaService.product.update({
        where: { id: createProdOutputDto.productId },
        data: {
          quantity: {
            decrement: createProdOutputDto.quantity,
          },
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.productOutput.findMany();
  }
}
