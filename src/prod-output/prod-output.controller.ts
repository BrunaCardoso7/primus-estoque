import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdOutputService } from './prod-output.service';
import { CreateProdOutputDto } from './dto/create-prod-output.dto';
import { UpdateProdOutputDto } from './dto/update-prod-output.dto';

@Controller('prod-output')
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prodOutputService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdOutputDto: UpdateProdOutputDto) {
    return this.prodOutputService.update(+id, updateProdOutputDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prodOutputService.remove(+id);
  }
}
