import { ViagemService } from './viagem.service';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
export declare class ViagemController {
    private viagemService;
    constructor(viagemService: ViagemService);
    add(data: AddViagemDto): Promise<import("@prisma/client/runtime").GetResult<{
        codViagem: number;
        custoFinal: number;
        custoEstimado: number;
        xPartida: string;
        yPartida: string;
        xDestino: string;
        yDestino: string;
        distanciaPercorrida: number;
        tempoEstimado: Date;
        tempoReal: Date;
        data: Date;
        factorFiabilidade: string;
        classificacaoMotorista: string;
        condicionantes: string;
        estadoViagem: string;
        fkMotoristaTaxi: number;
        fkClienteEmail: string;
    }, unknown> & {}>;
    estimar(codTaxi: number, xOrigem: string, yOrigem: string, xDestino: string, yDestino: string): Promise<-1 | {
        tempo: number;
        preco: number;
        tempoDoTaxiAoCliente: number;
    }>;
    update(data: UpdateViagemDto): Promise<import("@prisma/client/runtime").GetResult<{
        codViagem: number;
        custoFinal: number;
        custoEstimado: number;
        xPartida: string;
        yPartida: string;
        xDestino: string;
        yDestino: string;
        distanciaPercorrida: number;
        tempoEstimado: Date;
        tempoReal: Date;
        data: Date;
        factorFiabilidade: string;
        classificacaoMotorista: string;
        condicionantes: string;
        estadoViagem: string;
        fkMotoristaTaxi: number;
        fkClienteEmail: string;
    }, unknown> & {}>;
    remove(codViagem: number): Promise<import("@prisma/client/runtime").GetResult<{
        codViagem: number;
        custoFinal: number;
        custoEstimado: number;
        xPartida: string;
        yPartida: string;
        xDestino: string;
        yDestino: string;
        distanciaPercorrida: number;
        tempoEstimado: Date;
        tempoReal: Date;
        data: Date;
        factorFiabilidade: string;
        classificacaoMotorista: string;
        condicionantes: string;
        estadoViagem: string;
        fkMotoristaTaxi: number;
        fkClienteEmail: string;
    }, unknown> & {}>;
    getOne(codViagem: number): Promise<import("@prisma/client/runtime").GetResult<{
        codViagem: number;
        custoFinal: number;
        custoEstimado: number;
        xPartida: string;
        yPartida: string;
        xDestino: string;
        yDestino: string;
        distanciaPercorrida: number;
        tempoEstimado: Date;
        tempoReal: Date;
        data: Date;
        factorFiabilidade: string;
        classificacaoMotorista: string;
        condicionantes: string;
        estadoViagem: string;
        fkMotoristaTaxi: number;
        fkClienteEmail: string;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        codViagem: number;
        custoFinal: number;
        custoEstimado: number;
        xPartida: string;
        yPartida: string;
        xDestino: string;
        yDestino: string;
        distanciaPercorrida: number;
        tempoEstimado: Date;
        tempoReal: Date;
        data: Date;
        factorFiabilidade: string;
        classificacaoMotorista: string;
        condicionantes: string;
        estadoViagem: string;
        fkMotoristaTaxi: number;
        fkClienteEmail: string;
    }, unknown> & {})[]>;
}
