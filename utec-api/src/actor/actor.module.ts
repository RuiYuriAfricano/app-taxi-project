import { Module } from @nestjs / common';
import { AppController } from './actor.controller';
import { AppService } from './actor.service';
import { PrismaService } from './../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
