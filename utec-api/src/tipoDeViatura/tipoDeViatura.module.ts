import { Module } from '@nestjs/common';
import { TipoDeViaturaController } from './tipoDeViatura.controller';
import { TipoDeViaturaService } from './tipoDeViatura.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TipoDeViaturaController],
  providers: [TipoDeViaturaService, PrismaService],
})
export class TipoDeViaturaModule { }
