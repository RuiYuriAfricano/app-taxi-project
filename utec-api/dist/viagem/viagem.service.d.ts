import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ViagemService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddViagemDto): Promise<import(".prisma/client").viagem>;
    update(data: UpdateViagemDto): Promise<import(".prisma/client").viagem>;
    remove(codViagem: number): Promise<import(".prisma/client").viagem>;
    getOne(codViagem: number): Promise<import(".prisma/client").viagem>;
    getAll(): Promise<import(".prisma/client").viagem[]>;
}
