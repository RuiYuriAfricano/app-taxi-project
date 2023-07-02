import { Injectable } from '@nestjs/common';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddClienteDto) {
    const newCliente = await this.prisma.cliente.create(
      {
        data,
      }
    )
    return newCliente;
  }

  async update(data: UpdateClienteDto) {

    const clienteR = await this.prisma.cliente.update({
      where: {
        clienteEmail: data.clienteEmail,
      },
      data,
    });

    return clienteR;
  }

  async remove(clienteEmail: string) {
    const response = await this.prisma.cliente.delete({
      where: { clienteEmail },
    });

    return response;
  }

  async getOne(clienteEmail: string) {
    const clienteR = await this.prisma.cliente.findUnique({
      where: {
        clienteEmail,
      },
    });

    return clienteR;
  }

  async getAll() {
    const clientesR = await this.prisma.cliente.findMany();

    return clientesR;
  }

}
