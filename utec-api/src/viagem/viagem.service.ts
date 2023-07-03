import { Injectable } from '@nestjs/common';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaxiController } from 'src/taxi/taxi.controller';
import { TaxiService } from 'src/taxi/taxi.service';
import { MotoristaTaxiService } from 'src/motorista-taxi/motoristaTaxi.service';
import { MotoristaTaxiController } from 'src/motorista-taxi/motoristaTaxi.controller';
import { MotoristaService } from 'src/motorista/motorista.service';
import { MotoristaController } from 'src/motorista/motorista.controller';

@Injectable()
export class ViagemService {
  constructor(private prisma: PrismaService) { }

  async add(data: AddViagemDto) {

    //estadoViagem pode ser: instantanea, marcada, satisfeita
    if (data.estadoViagem === "instantanea") {
      //Consultar o código do taxi na tabela motoristaTaxi
      const prisma = new PrismaService();
      const mTaxiService = new MotoristaTaxiService(prisma);
      const mtaxiController = new MotoristaTaxiController(mTaxiService);
      const mTaxi = await mtaxiController.getOne(data.fkMotoristaTaxi);

      //Chamar o método estimar

      let estimacao = await this.estimar(mTaxi.id_taxi, data.xPartida, data.yPartida, data.xDestino, data.yDestino);

      /*
      fiabilidade: 1-5
      fiabilidade baixa: significa que o carro pode ou está mais próximo de cumprir
      o tempo estimado.
      fiabilidade alta: significa o oposto.
  
      condicionantes:
      bom-clima = 1
      chuva = 10
      transito = 7
  
      destreza: [1-3] 
      1-junior
      2-pleno
      3-senior 
      */

      //consultar na tabela motorista a sua destreza
      const motoristaService = new MotoristaService(prisma);
      const motoristaController = new MotoristaController(motoristaService);
      const motorista = await motoristaController.getOne(mTaxi.id_motorista);

      //******************************************************

      let precoReal = estimacao['preco'];
      const destreza = motorista.destreza;
      const fiabilidade = Math.floor(Math.random() * 5) + 1; //[1 - 5]
      const tempoReal = Number(estimacao['tempo']) * Number(data.condicionantes) * fiabilidade / Number(destreza);
      const calc = Number(tempoReal) - Number(estimacao['tempo']);
      const diferencaDeTempo = calc > 0 ? calc : calc * -1;

      //consultar na tabela taxi com codTAxi
      const taxiService = new TaxiService(prisma);
      const taxiController = new TaxiController(taxiService);
      const taxi = await taxiController.getOne(mTaxi.id_taxi);

      if (diferencaDeTempo <= Number(estimacao['tempo']) * 0.25) {

        const distancia = taxi.vmPorKM * diferencaDeTempo;

        precoReal = taxi.precoBasePorKM * distancia;
      }

      data.tempoEstimado = estimacao['tempo'];
      data.tempoReal = tempoReal.toString();
      data.custoEstimado = estimacao['tempo'];
      data.custoFinal = precoReal;
      data.distanciaPercorrida = taxi.vmPorKM * estimacao['tempo'];

    }

    const newViagem = await this.prisma.viagem.create(
      {
        data,
      }
    )
    return newViagem;
  }

  async update(data: UpdateViagemDto) {
    data.codViagem = Number(data?.codViagem);

    //estadoViagem pode ser: instantanea, marcada, satisfeita
    // data.custoFinal.toString().trim().length = 0 se a viagem está marcada
    if (data.custoFinal.toString().trim().length === 0) {
      //Consultar o código do taxi na tabela motoristaTaxi
      const prisma = new PrismaService();
      const mTaxiService = new MotoristaTaxiService(prisma);
      const mtaxiController = new MotoristaTaxiController(mTaxiService);
      const mTaxi = await mtaxiController.getOne(data.fkMotoristaTaxi);

      //Chamar o método estimar

      let estimacao = await this.estimar(mTaxi.id_taxi, data.xPartida, data.yPartida, data.xDestino, data.yDestino);

      /*
      fiabilidade: 1-5
      fiabilidade baixa: significa que o carro pode ou está mais próximo de cumprir
      o tempo estimado.
      fiabilidade alta: significa o oposto.
  
      condicionantes:
      bom-clima = 1
      chuva = 10
      transito = 7
  
      destreza: [1-3] 
      1-junior
      2-pleno
      3-senior 
      */

      //consultar na tabela motorista a sua destreza
      const motoristaService = new MotoristaService(prisma);
      const motoristaController = new MotoristaController(motoristaService);
      const motorista = await motoristaController.getOne(mTaxi.id_motorista);

      //******************************************************

      let precoReal = estimacao['preco'];
      const destreza = motorista.destreza;
      const fiabilidade = Math.floor(Math.random() * 5) + 1; //[1 - 5]
      const tempoReal = Number(estimacao['tempo']) * Number(data.condicionantes) * fiabilidade / Number(destreza);
      const calc = Number(tempoReal) - Number(estimacao['tempo']);
      const diferencaDeTempo = calc > 0 ? calc : calc * -1;

      //consultar na tabela taxi com codTAxi
      const taxiService = new TaxiService(prisma);
      const taxiController = new TaxiController(taxiService);
      const taxi = await taxiController.getOne(mTaxi.id_taxi);

      if (diferencaDeTempo <= Number(estimacao['tempo']) * 0.25) {

        const distancia = taxi.vmPorKM * diferencaDeTempo;

        precoReal = taxi.precoBasePorKM * distancia;
      }

      data.tempoEstimado = estimacao['tempo'];
      data.tempoReal = tempoReal.toString();
      data.custoEstimado = estimacao['tempo'];
      data.custoFinal = precoReal;
      data.distanciaPercorrida = taxi.vmPorKM * estimacao['tempo'];

    }

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
      preco: precoEstimado,
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
