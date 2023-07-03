import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaDto): Promise<any>;
    update(data: UpdateMotoristaDto): Promise<any>;
    remove(email: string): Promise<any>;
    getOne(email: string): Promise<any>;
    getAll(): Promise<any>;
}
