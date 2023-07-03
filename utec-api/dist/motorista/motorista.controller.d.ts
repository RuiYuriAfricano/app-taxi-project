import { MotoristaService } from './motorista.service';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
export declare class MotoristaController {
    private motoristaService;
    constructor(motoristaService: MotoristaService);
    add(data: AddMotoristaDto): Promise<any>;
    update(data: UpdateMotoristaDto): Promise<any>;
    remove(email: string): Promise<any>;
    getOne(email: string): Promise<any>;
    getAll(): Promise<any>;
}
