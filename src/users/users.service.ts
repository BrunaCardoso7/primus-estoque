import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFound } from 'src/erros';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    try {
      return await this.prismaService.user.create({
        data: { ...createUserDto },
      });
    } catch (error) {
      console.error('Can not possible create new user:' + error);
      throw new BadRequestException();
    }
  }

  async findAll() {
    try {
      return await this.prismaService.user.findMany();
    } catch (error) {
      throw new NotFound(`Product not found in the database!`);
    }
  }

  async findOne(email: string) {
    try {
      return await this.prismaService.user.findUnique({
        where: { email },
      });
    } catch (error) {
      throw new NotFound(`User with email ${email} not found in the database!`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      return await this.prismaService.user.update({
        where: { id },
        data: { ...updateUserDto },
      });
    } catch (error) {
      console.error('error in update: ' + error);
      throw new NotFound(`Product with id ${id} not found in the database!`);
    }
  }

  async remove(id: number) {
    try {
      return await this.prismaService.user.delete({
        where: { id },
      });
    } catch (error) {
      console.error('error in delete: ' + error);
      throw new NotFound(`Product with id ${id} not found in the database!`);
    }
  }
}
