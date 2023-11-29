import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoController } from './productos/producto.controller';
import { ProductoService } from './productos/producto.service';
import { ProductoModule } from './productos/producto.module';

@Module({
  imports: [ProductoModule],
  controllers: [AppController, ProductoController],
  providers: [AppService, ProductoService],
})
export class AppModule {}
