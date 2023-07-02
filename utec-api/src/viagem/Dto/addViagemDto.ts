export class AddViagemDto {
    codViagem: number;
    custoFinal: number;
    custoEstimado: number;
    pontoPartida: string;
    pontoDestino: string;
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
}