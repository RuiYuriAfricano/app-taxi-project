import { Module } from '@nestjs/common';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ActorController],
  providers: [ActorService, PrismaService],
})
export class ActorModule { }
