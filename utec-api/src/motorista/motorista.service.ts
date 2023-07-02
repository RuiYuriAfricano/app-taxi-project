import { Injectable } from '@nestjs/common';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MotoristaService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddMotoristaDto) {
    const newMotorista = await this.prisma.motorista.create(
      {
        data,
      }
    )
    return newMotorista;
  }

  async update(data: UpdateMotoristaDto) {

    const motoristaR = await this.prisma.motorista.update({
      where: {
        email: data.email,
      },
      data,
    });

    return motoristaR;
  }

  async remove(email: string) {
    const response = await this.prisma.motorista.delete({
      where: { email },
    });

    return response;
  }

  async getOne(email: string) {
    const motoristaR = await this.prisma.motorista.findUnique({
      where: {
        email,
      },
    });

    return motoristaR;
  }

  async getAll() {
    const motoristaR = await this.prisma.motorista.findMany();

    return motoristaR;
  }

}
