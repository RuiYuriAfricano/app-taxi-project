import { Injectable } from '@nestjs/common';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MotoristaTaxiService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddMotoristaTaxiDto) {
    const newMotoristaTaxi = await this.prisma.motoristataxi.create(
      {
        data,
      }
    )
    return newMotoristaTaxi;
  }

  async update(data: UpdateMotoristaTaxiDto) {
    data.codMotoristaTaxi = Number(data?.codMotoristaTaxi);
    const motoristaTaxiR = await this.prisma.motoristataxi.update({
      where: {
        codMotoristaTaxi: data.codMotoristaTaxi,
      },
      data,
    });

    return motoristaTaxiR;
  }

  async remove(codMotoristaTaxi: number) {
    const response = await this.prisma.motoristataxi.delete({
      where: { codMotoristaTaxi },
    });

    return response;
  }

  async getOne(codMotoristaTaxi: number) {
    const motoristaTaxiR = await this.prisma.motoristataxi.findUnique({
      where: {
        codMotoristaTaxi,
      },
    });

    return motoristaTaxiR;
  }

  async getMotoristasTaxiComFilaEspera() {
    const motoristaTaxiR = await this.prisma.motoristataxi.findMany({
      where: {
        taxi: {
          filaEspera: '1'
        }
      }
    });

    return motoristaTaxiR;
  }
  async getMotoristasTaxiComDisponibilidadeAtiva() {
    const motoristaTaxiR = await this.prisma.motoristataxi.findMany({
      where: {
        taxi: {
          disponibilidade: 'activada'
        }
      }
    });

    return motoristaTaxiR;
  }


  async getAll() {
    const motoristaTaxiR = await this.prisma.motoristataxi.findMany();

    return motoristaTaxiR;
  }

}
