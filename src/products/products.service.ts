import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    const { nome, desc, marca, valor } = createProductDto;
    return this.prismaService.product.create({
      data: {
        name: nome,
        description: desc,
        suplier: marca,
        value: valor,
      },
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  findOne(id: number) {
    return this.prismaService.product.findUnique({
      where: { id },
    });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { nome, desc, marca, valor } = updateProductDto;
    return this.prismaService.product.update({
      where: { id },
      data: {
        name: nome,
        description: desc,
        suplier: marca,
        value: valor,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.product.delete({
      where: { id },
    });
  }
}
