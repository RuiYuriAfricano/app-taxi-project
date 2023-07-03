import { Injectable } from '@nestjs/common';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaxiController } from 'src/taxi/taxi.controller';
import { TaxiService } from 'src/taxi/taxi.service';

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
        codViagem: data.codViagem,
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

  async estimar(codTaxi: number, xOrigem: string, yOrigem: string, xDestino: string, yDestino: string) {
    const distX = Math.pow(Number(xDestino) - Number(xOrigem), 2);
    const distY = Math.pow(Number(yDestino) - Number(yOrigem), 2);
    const dist = Math.sqrt(distX + distY)

    //consultar na tabela taxi com codTAxi
    const prisma = new PrismaService();
    const taxiService = new TaxiService(prisma);
    const taxiController = new TaxiController(taxiService);
    const taxi = await taxiController.getOne(codTaxi);

    if (!taxi) {
      return -1;
    }
    let tempoEstimado = dist / taxi.vmPorKM;
    let precoEstimado = dist * taxi.precoBasePorKM;
    let distTaxiCliente = Math.sqrt(
      Math.pow((Number(xOrigem) - Number(taxi.x)), 2)
      +
      Math.pow((Number(yOrigem) - Number(taxi.y)), 2)
    )

    let tempoTaxiCliente = distTaxiCliente / taxi.vmPorKM;
    const estimacao = {
      tempo: tempoEstimado,
      precoEstimado: precoEstimado,
      tempoDoTaxiAoCliente: tempoTaxiCliente
    }

    return estimacao;
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
