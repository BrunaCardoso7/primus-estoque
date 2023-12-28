import { Module } from '@nestjs/common';
import { ProdInputService } from './prod-input.service';
import { ProdInputController } from './prod-input.controller';

@Module({
  controllers: [ProdInputController],
  providers: [ProdInputService],
})
export class ProdInputModule {}
