import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';

@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) { }

  @Post()
  add(@Body() data: AddActorDto) {
    return this.actorService.add(data);
  }

  @Put()
  update(@Body() data: UpdateActorDto) {
    return this.actorService.update(data);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.actorService.remove(email);
  }

  @Get(':email')
  getOne(@Param('email') email: string) {
    return this.actorService.getOne(email);
  }

  @Get()
  getAll() {
    return this.actorService.getAll();
  }
}
