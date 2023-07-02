import { Module } from '@nestjs/common';
import { ClienteController } from './taxi.controller';
import { ClienteService } from './taxi.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService, PrismaService],
})
export class ClienteModule { }
