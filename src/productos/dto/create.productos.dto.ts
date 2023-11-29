import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductosDto {
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly casa_cervecera: string;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly tipo_de_cerveza: string;

  @ApiProperty()
  @IsNumber({}, { message: 'el atributo debe ser un number' })
  readonly grado_alcoholico: number;

  @ApiProperty()
  @IsString({ message: 'el atributo debe ser un string' })
  readonly amargor_ibu: string;

  @ApiProperty()
  @IsString()
  readonly nombre: string;

  @ApiProperty()
  @IsNumber({}, { message: 'el atributo debe ser un number' })
  readonly estrellas: number;

  @ApiProperty()
  @IsNumber({}, { message: 'el atributo debe ser un number' })
  readonly precio_compra: number;

  @ApiProperty()
  @IsNumber({}, { message: 'el atributo debe ser un number' })
  readonly precio_venta: number;
}
