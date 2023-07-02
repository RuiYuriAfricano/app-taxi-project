import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { MotoristaService } from './motorista.service';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';

@Controller('motorista')
export class MotoristaController {
  constructor(private motoristaService: MotoristaService) { }

  @Post()
  add(@Body() data: AddMotoristaDto) {
    return this.motoristaService.add(data);
  }

  @Put()
  update(@Body() data: UpdateMotoristaDto) {
    return this.motoristaService.update(data);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.motoristaService.remove(email);
  }

  @Get(':email')
  getOne(@Param('email') email: string) {
    return this.motoristaService.getOne(email);
  }

  @Get()
  getAll() {
    return this.motoristaService.getAll();
  }
}
