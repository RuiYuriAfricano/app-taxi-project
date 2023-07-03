import { MotoristaService } from './motorista.service';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
export declare class MotoristaController {
    private motoristaService;
    constructor(motoristaService: MotoristaService);
    add(data: AddMotoristaDto): Promise<import(".prisma/client").motorista>;
    update(data: UpdateMotoristaDto): Promise<import(".prisma/client").motorista>;
    remove(email: string): Promise<import(".prisma/client").motorista>;
    getOne(email: string): Promise<import(".prisma/client").motorista>;
    getAll(): Promise<import(".prisma/client").motorista[]>;
}
