import { Module } from '@nestjs/common';
import { TaxiController } from './taxi.controller';
import { TaxiService } from './taxi.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TaxiController],
  providers: [TaxiService, PrismaService],
})
export class TaxiModule { }
