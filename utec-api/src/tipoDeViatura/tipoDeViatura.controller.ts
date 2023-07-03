import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { TipoDeViaturaService } from './tipoDeViatura.service';
import { AddTipoDeViaturaDto } from './Dto/addTipoDeViaturaDto';
import { UpdateTipoDeViaturaDto } from './Dto/updateTipoDeViaturaDto';

@Controller('tipoDeViatura')
export class TipoDeViaturaController {
  constructor(private tipoDeViaturaService: TipoDeViaturaService) { }

  @Post()
  add(@Body() data: AddTipoDeViaturaDto) {
    return this.tipoDeViaturaService.add(data);
  }

  @Put()
  update(@Body() data: UpdateTipoDeViaturaDto) {
    return this.tipoDeViaturaService.update(data);
  }

  @Delete(':codTDV')
  remove(@Param('codTDV') codTDV: number) {
    return this.tipoDeViaturaService.remove(codTDV);
  }

  @Get(':codTDV')
  getOne(@Param('codTDV') codTDV: number) {
    return this.tipoDeViaturaService.getOne(codTDV);
  }

  @Get()
  getAll() {
    return this.tipoDeViaturaService.getAll();
  }
}
