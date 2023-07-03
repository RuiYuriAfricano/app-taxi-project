import { ClienteService } from './cliente.service';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    add(data: AddClienteDto): Promise<any>;
    update(data: UpdateClienteDto): Promise<any>;
    remove(clienteEmail: string): Promise<any>;
    getOne(clienteEmail: string): Promise<any>;
    getAll(): Promise<any>;
}
