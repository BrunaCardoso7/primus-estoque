import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdInputService } from './prod-input.service';
import { CreateProdInputDto } from './dto/create-prod-input.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
@ApiTags('Products Input')
@Controller('products/input')
export class ProdInputController {
  constructor(private readonly prodInputService: ProdInputService) {}

  @Post()
  @ApiBody({ type: CreateProdInputDto })
  create(@Body() createProdInputDto: CreateProdInputDto) {
    return this.prodInputService.create(createProdInputDto);
  }

  @Get()
  findAll() {
    return this.prodInputService.findAll();
  }
}
