import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { NotFound } from 'src/erros';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    try {
      const createdProduct = this.prismaService.product.create({
        data: { ...createProductDto },
      });
      return createdProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.product.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFound(`Product with id ${id} not found in the database!`);
      }
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      return await this.prismaService.product.update({
        where: { id },
        data: { ...updateProductDto },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFound(`Product with id ${id} not found in the database!`);
      }
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.product.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFound(`Product with id ${id} not found in the database!`);
      }
    }
  }
}
