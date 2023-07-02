import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { ViagemService } from './viagem.service';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';

@Controller('viagem')
export class ViagemController {
  constructor(private viagemService: ViagemService) { }

  @Post()
  add(@Body() data: AddViagemDto) {
    return this.viagemService.add(data);
  }

  @Put()
  update(@Body() data: UpdateViagemDto) {
    return this.viagemService.update(data);
  }

  @Delete(':codViagem')
  remove(@Param('codViagem') codViagem: number) {
    return this.viagemService.remove(codViagem);
  }

  @Get(':codViagem')
  getOne(@Param('codViagem') codViagem: number) {
    return this.viagemService.getOne(codViagem);
  }

  @Get()
  getAll() {
    return this.viagemService.getAll();
  }
}
