import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ActorModule } from './actor/actor.module';
import { ClienteModule } from './cliente/cliente.module';
import { MotoristaModule } from './motorista/motorista.module';
import { MotoristaTaxiModule } from './motorista-taxi/motoristaTaxi.module';
import { TaxiModule } from './taxi/taxi.module';
import { ViagemModule } from './viagem/viagem.module';

@Module({
  imports: [ActorModule, ClienteModule, MotoristaModule, MotoristaTaxiModule, TaxiModule, ViagemModule],
  providers: [PrismaService],
})
export class AppModule { }
