import { Module } from '@nestjs/common';
import { MotoristaController } from './motorista.controller';
import { MotoristaService } from './motorista.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [MotoristaController],
  providers: [MotoristaService, PrismaService],
})
export class MotoristaModule { }
