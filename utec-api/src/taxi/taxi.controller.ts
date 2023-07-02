import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { ClienteService } from './taxi.service';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';

@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) { }

  @Post()
  add(@Body() data: AddClienteDto) {
    return this.clienteService.add(data);
  }

  @Put()
  update(@Body() data: UpdateClienteDto) {
    return this.clienteService.update(data);
  }

  @Delete(':clienteEmail')
  remove(@Param('clienteEmail') clienteEmail: string) {
    return this.clienteService.remove(clienteEmail);
  }

  @Get(':clienteEmail')
  getOne(@Param('clienteEmail') clienteEmail: string) {
    return this.clienteService.getOne(clienteEmail);
  }

  @Get()
  getAll() {
    return this.clienteService.getAll();
  }
}
