import { MotoristaService } from './motorista.service';
import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
export declare class MotoristaController {
    private motoristaService;
    constructor(motoristaService: MotoristaService);
    add(data: AddMotoristaDto): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        destreza: string;
        id_empresa: number;
    }, unknown> & {}>;
    update(data: UpdateMotoristaDto): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        destreza: string;
        id_empresa: number;
    }, unknown> & {}>;
    remove(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        destreza: string;
        id_empresa: number;
    }, unknown> & {}>;
    getOne(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        destreza: string;
        id_empresa: number;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        email: string;
        destreza: string;
        id_empresa: number;
    }, unknown> & {})[]>;
}
