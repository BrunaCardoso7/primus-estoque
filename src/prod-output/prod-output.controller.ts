import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdOutputService } from './prod-output.service';
import { CreateProdOutputDto } from './dto/create-prod-output.dto';

@Controller('product/output')
export class ProdOutputController {
  constructor(private readonly prodOutputService: ProdOutputService) {}

  @Post()
  create(@Body() createProdOutputDto: CreateProdOutputDto) {
    return this.prodOutputService.create(createProdOutputDto);
  }

  @Get()
  findAll() {
    return this.prodOutputService.findAll();
  }
}
