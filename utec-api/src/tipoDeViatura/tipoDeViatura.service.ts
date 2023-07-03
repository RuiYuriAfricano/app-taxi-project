import { Injectable } from '@nestjs/common';
import { AddTipoDeViaturaDto } from './Dto/addTipoDeViaturaDto';
import { UpdateTipoDeViaturaDto } from './Dto/updateTipoDeViaturaDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TipoDeViaturaService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddTipoDeViaturaDto) {
    const newtipoDeViatura = await this.prisma.tipoDeViatura.create(
      {
        data,
      }
    )
    return newtipoDeViatura;
  }

  async update(data: UpdateTipoDeViaturaDto) {
    data.codTDV = Number(data?.codTDV);
    const tipoDeViaturaR = await this.prisma.tipoDeViatura.update({
      where: {
        codTDV: data.codTDV,
      },
      data,
    });

    return tipoDeViaturaR;
  }

  async remove(codTDV: number) {
    const response = await this.prisma.tipoDeViatura.delete({
      where: { codTDV },
    });

    return response;
  }

  async getOne(codTDV: number) {
    const tipoDeViaturaR = await this.prisma.tipoDeViatura.findUnique({
      where: {
        codTDV,
      },
    });

    return tipoDeViaturaR;
  }

  async getAll() {
    const tipoDeViaturaR = await this.prisma.tipoDeViatura.findMany();

    return tipoDeViaturaR;
  }

}
