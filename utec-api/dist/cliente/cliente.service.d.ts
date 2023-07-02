import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ClienteService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddClienteDto): Promise<import("@prisma/client/runtime").GetResult<{
        clienteEmail: string;
        x: string;
        y: string;
    }, unknown> & {}>;
    update(data: UpdateClienteDto): Promise<import("@prisma/client/runtime").GetResult<{
        clienteEmail: string;
        x: string;
        y: string;
    }, unknown> & {}>;
    remove(clienteEmail: string): Promise<import("@prisma/client/runtime").GetResult<{
        clienteEmail: string;
        x: string;
        y: string;
    }, unknown> & {}>;
    getOne(clienteEmail: string): Promise<import("@prisma/client/runtime").GetResult<{
        clienteEmail: string;
        x: string;
        y: string;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        clienteEmail: string;
        x: string;
        y: string;
    }, unknown> & {})[]>;
}
