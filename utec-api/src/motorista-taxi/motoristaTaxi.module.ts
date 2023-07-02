import { Module } from '@nestjs/common';
import { MotoristaTaxiController } from './motoristaTaxi.controller';
import { MotoristaTaxiService } from './motoristaTaxi.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MotoristaTaxiController],
  providers: [MotoristaTaxiService, PrismaService],
})
export class MotoristaTaxiModule { }
