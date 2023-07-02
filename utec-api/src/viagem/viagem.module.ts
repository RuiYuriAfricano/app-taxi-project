import { Module } from '@nestjs/common';
import { ViagemController } from './viagem.controller';
import { ViagemService } from './viagem.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ViagemController],
  providers: [ViagemService, PrismaService],
})
export class ViagemModule { }
