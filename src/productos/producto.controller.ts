import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger'; // Assuming you are using Swagger for documentation
import { CreateProductosDto } from './dto/create.productos.dto'; // Assuming you have a DTO for creating productos

@Controller('producto')
export class ProductoController {
  productosService: any;

  @Get('productos/:id')  
  getProductoById(@Param('id') id: string) {
    return this.productosService.getProductoById(id);
  }

  @ApiQuery({
    name: 'precio_maximo',
    description: 'Ingresar precio máximo de venta del producto que desea buscar',
    type: Number,
    required: false,
  })
  @Put('productos/:id')
  async actualizar(@Param('id') id: string, @Body() updatedProducto: CreateProductosDto): Promise<string> {
    return this.productosService.updateProducto(id, updatedProducto); // Assuming you have an updateProducto method in your service
  }

  @ApiQuery({
    name: 'precio_maximo',
    description: 'Ingresar precio máximo de venta del producto que desea buscar',
    type: Number,
    required: false,
  })
  @Delete('productos/:id')
  async eliminar(@Param('id') id: string): Promise<string> {
    return this.productosService.deleteProducto(id); // Assuming you have a deleteProducto method in your service
  }
}


