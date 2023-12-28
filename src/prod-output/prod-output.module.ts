import { Module } from '@nestjs/common';
import { ProdOutputService } from './prod-output.service';
import { ProdOutputController } from './prod-output.controller';

@Module({
  controllers: [ProdOutputController],
  providers: [ProdOutputService],
})
export class ProdOutputModule {}
