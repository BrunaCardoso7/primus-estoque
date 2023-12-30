import { Module } from '@nestjs/common';
import { ProdInputService } from './prod-input.service';
import { ProdInputController } from './prod-input.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [PrismaModule],
  controllers: [ProdInputController],
  providers: [ProdInputService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class ProdInputModule {}
