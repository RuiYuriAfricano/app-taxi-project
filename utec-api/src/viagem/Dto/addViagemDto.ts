export class AddViagemDto {
    codViagem: number;
    custoFinal: number;
    custoEstimado: number;
    xPartida: string;
    yPartida: string;
    xDestino: string;
    yDestino: string;
    distanciaPercorrida: number;
    tempoEstimado: string;
    tempoReal: string;
    data: Date;
    factorFiabilidade: string;
    classificacaoMotorista: string;
    condicionantes: string;
    estadoViagem: string;
    fkMotoristaTaxi: number;
    fkClienteEmail: string;
}