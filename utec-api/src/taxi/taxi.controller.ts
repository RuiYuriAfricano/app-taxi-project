import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { TaxiService } from './taxi.service';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';

@Controller('taxi')
export class TaxiController {
  constructor(private taxiService: TaxiService) { }

  @Post()
  add(@Body() data: AddTaxiDto) {
    return this.taxiService.add(data);
  }

  @Put()
  update(@Body() data: UpdateTaxiDto) {
    return this.taxiService.update(data);
  }

  @Delete(':codTaxi')
  remove(@Param('codTaxi') codTaxi: number) {
    return this.taxiService.remove(codTaxi);
  }

  @Get(':codTaxi')
  getOne(@Param('codTaxi') codTaxi: number) {
    return this.taxiService.getOne(codTaxi);
  }

  @Get()
  getAll() {
    return this.taxiService.getAll();
  }
}
