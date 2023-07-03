import { ViagemService } from './viagem.service';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
export declare class ViagemController {
    private viagemService;
    constructor(viagemService: ViagemService);
    add(data: AddViagemDto): Promise<any>;
    estimar(codTaxi: number, xOrigem: string, yOrigem: string, xDestino: string, yDestino: string): Promise<-1 | {
        tempo: number;
        preco: number;
        tempoDoTaxiAoCliente: number;
    }>;
    update(data: UpdateViagemDto): Promise<any>;
    remove(codViagem: number): Promise<any>;
    getOne(codViagem: number): Promise<any>;
    getAll(): Promise<any>;
}
