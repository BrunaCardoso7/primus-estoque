import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdOutputService } from './prod-output.service';
import { CreateProdOutputDto } from './dto/create-prod-output.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
@ApiTags('Products Output')
@Controller('products/output')
export class ProdOutputController {
  constructor(private readonly prodOutputService: ProdOutputService) {}
  @Post()
  @ApiBody({ type: CreateProdOutputDto })
  create(@Body() createProdOutputDto: CreateProdOutputDto) {
    return this.prodOutputService.create(createProdOutputDto);
  }

  @Get()
  findAll() {
    return this.prodOutputService.findAll();
  }
}
