import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClienteService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddClienteDto): Promise<any>;
    update(data: UpdateClienteDto): Promise<any>;
    remove(clienteEmail: string): Promise<any>;
    getOne(clienteEmail: string): Promise<any>;
    getAll(): Promise<any>;
}
