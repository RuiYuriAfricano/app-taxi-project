import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClienteService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddClienteDto): unknown;
    update(data: UpdateClienteDto): unknown;
    remove(clienteEmail: string): unknown;
    getOne(clienteEmail: string): unknown;
    getAll(): unknown;
}
