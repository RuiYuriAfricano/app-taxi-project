import { MotoristaService } from './motorista.service';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
export declare class MotoristaController {
    private motoristaService;
    constructor(motoristaService: MotoristaService);
    add(data: AddMotoristaDto): unknown;
    update(data: UpdateMotoristaDto): unknown;
    remove(email: string): unknown;
    getOne(email: string): unknown;
    getAll(): unknown;
}
