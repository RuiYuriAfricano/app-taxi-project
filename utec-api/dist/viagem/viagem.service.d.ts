import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ViagemService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddViagemDto): unknown;
    update(data: UpdateViagemDto): unknown;
    remove(codViagem: number): unknown;
    getOne(codViagem: number): unknown;
    getAll(): unknown;
}
