import { Module } from '@nestjs/common';
import { ProdInputService } from './prod-input.service';
import { ProdInputController } from './prod-input.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProdInputController],
  providers: [ProdInputService],
})
export class ProdInputModule {}
