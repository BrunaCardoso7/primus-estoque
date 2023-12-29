import { Module } from '@nestjs/common';
import { ProdOutputService } from './prod-output.service';
import { ProdOutputController } from './prod-output.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProdOutputController],
  providers: [ProdOutputService],
})
export class ProdOutputModule {}
