import { ClienteService } from './cliente.service';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    add(data: AddClienteDto): Promise<import(".prisma/client").cliente>;
    update(data: UpdateClienteDto): Promise<import(".prisma/client").cliente>;
    remove(clienteEmail: string): Promise<import(".prisma/client").cliente>;
    getOne(clienteEmail: string): Promise<import(".prisma/client").cliente>;
    getAll(): Promise<import(".prisma/client").cliente[]>;
}
