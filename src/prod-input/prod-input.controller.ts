import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdInputService } from './prod-input.service';
import { CreateProdInputDto } from './dto/create-prod-input.dto';

@Controller('products/input')
export class ProdInputController {
  constructor(private readonly prodInputService: ProdInputService) {}

  @Post()
  create(@Body() createProdInputDto: CreateProdInputDto) {
    return this.prodInputService.create(createProdInputDto);
  }

  @Get()
  findAll() {
    return this.prodInputService.findAll();
  }
}
