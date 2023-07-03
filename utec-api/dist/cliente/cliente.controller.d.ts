import { ClienteService } from './cliente.service';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
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
