import { Injectable } from '@nestjs/common';
import { CreateProdInputDto } from './dto/create-prod-input.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFound } from 'src/erros';

@Injectable()
export class ProdInputService {
  constructor(private prismaService: PrismaService) {}
  async create(createProdInputDto: CreateProdInputDto) {
    const product = await this.prismaService.productInput.findUnique({
      where: { id: createProdInputDto.productId },
    });

    if (!product) {
      throw new NotFound(`Product not found in the database!`);
    }

    const data = {
      productId: createProdInputDto.productId,
      quantity: createProdInputDto.quantity,
    };

    const stackProducto = await this.prismaService.productInput.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.productInput.findMany();
  }
}
