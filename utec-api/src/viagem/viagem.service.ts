import { Injectable } from '@nestjs/common';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViagemService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddViagemDto) {
    const newViagem = await this.prisma.viagem.create(
      {
        data,
      }
    )
    return newViagem;
  }

  async update(data: UpdateViagemDto) {
    data.codViagem = Number(data?.codViagem);
    const viagemR = await this.prisma.viagem.update({
      where: {
        codTaxi: data.codViagem,
      },
      data,
    });

    return viagemR;
  }

  async remove(codViagem: number) {
    const response = await this.prisma.viagem.delete({
      where: { codViagem },
    });

    return response;
  }

  async getOne(codViagem: number) {
    const viagemR = await this.prisma.viagem.findUnique({
      where: {
        codViagem,
      },
    });

    return viagemR;
  }

  async getAll() {
    const viagensR = await this.prisma.viagem.findMany();

    return viagensR;
  }

}
