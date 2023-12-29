import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ProdInputModule } from './prod-input/prod-input.module';
import { ProdOutputModule } from './prod-output/prod-output.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    ProdInputModule,
    ProdOutputModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
