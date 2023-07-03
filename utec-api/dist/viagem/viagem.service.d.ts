import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ViagemService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddViagemDto): Promise<any>;
    update(data: UpdateViagemDto): Promise<any>;
    remove(codViagem: number): Promise<any>;
    estimar(codTaxi: number, xOrigem: string, yOrigem: string, xDestino: string, yDestino: string): Promise<-1 | {
        tempo: number;
        precoEstimado: number;
    }>;
    getOne(codViagem: number): Promise<any>;
    getAll(): Promise<any>;
}
