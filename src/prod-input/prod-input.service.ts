import { Injectable } from '@nestjs/common';
import { CreateProdInputDto } from './dto/create-prod-input.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFound } from 'src/erros';
import { ProductInputCreateInput } from '@prisma/client/index';

@Injectable()
export class ProdInputService {
  constructor(private prismaService: PrismaService) {}
  async create(createProdInputDto: CreateProdInputDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id: createProdInputDto.productId },
    });

    if (!product) {
      throw new NotFound(`Product not found in the database!`);
    }

    const data: ProductInputCreateInput = {
      name: '',
      productId: createProdInputDto.productId,
      quantity: createProdInputDto.quantity,
      // postedAt: createProdInputDto.postedAt,
    };

    const result = await this.prismaService.$transaction([
      this.prismaService.productInput.create({
        data,
      }),
      this.prismaService.product.update({
        where: { id: createProdInputDto.productId },
        data: {
          quantity: {
            increment: createProdInputDto.quantity,
          },
        },
      }),
    ]);
    return result[0];
  }

  findAll() {
    return this.prismaService.productInput.findMany();
  }
}
