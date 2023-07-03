import { ClienteService } from './cliente.service';
import { AddClienteDto } from './dto/addClienteDto';
import { UpdateClienteDto } from './dto/updateClienteDto';
export declare class ClienteController {
    private clienteService;
    constructor(clienteService: ClienteService);
    add(data: AddClienteDto): unknown;
    update(data: UpdateClienteDto): unknown;
    remove(clienteEmail: string): unknown;
    getOne(clienteEmail: string): unknown;
    getAll(): unknown;
}
