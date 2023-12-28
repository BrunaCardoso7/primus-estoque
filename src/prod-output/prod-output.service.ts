import { Injectable } from '@nestjs/common';
import { CreateProdOutputDto } from './dto/create-prod-output.dto';
import { UpdateProdOutputDto } from './dto/update-prod-output.dto';

@Injectable()
export class ProdOutputService {
  create(createProdOutputDto: CreateProdOutputDto) {
    return 'This action adds a new prodOutput';
  }

  findAll() {
    return `This action returns all prodOutput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prodOutput`;
  }

  update(id: number, updateProdOutputDto: UpdateProdOutputDto) {
    return `This action updates a #${id} prodOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} prodOutput`;
  }
}
