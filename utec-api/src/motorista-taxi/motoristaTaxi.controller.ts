import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { MotoristaTaxiService } from './motoristaTaxi.service';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';

@Controller('motoristaTaxi')
export class MotoristaTaxiController {
  constructor(private motoristaTaxiService: MotoristaTaxiService) { }

  @Post()
  add(@Body() data: AddMotoristaTaxiDto) {
    return this.motoristaTaxiService.add(data);
  }

  @Put()
  update(@Body() data: UpdateMotoristaTaxiDto) {
    return this.motoristaTaxiService.update(data);
  }

  @Delete(':codMotoristaTaxi')
  remove(@Param('email') codMotoristaTaxi: number) {
    return this.motoristaTaxiService.remove(codMotoristaTaxi);
  }


  @Get('disponivel')
  getMotoristasTaxiComDisponibilidadeAtiva() {
    return this.motoristaTaxiService.getMotoristasTaxiComDisponibilidadeAtiva();
  }
  @Get('filas')
  getMotoristasTaxiComFilaEspera() {
    return this.motoristaTaxiService.getMotoristasTaxiComFilaEspera();
  }

  @Get(':codMotoristaTaxi')
  getOne(@Param('codMotoristaTaxi') codMotoristaTaxi: number) {
    return this.motoristaTaxiService.getOne(codMotoristaTaxi);
  }
  @Get()
  getAll() {
    return this.motoristaTaxiService.getAll();
  }
}
