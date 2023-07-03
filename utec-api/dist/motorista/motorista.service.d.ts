import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaDto): unknown;
    update(data: UpdateMotoristaDto): unknown;
    remove(email: string): unknown;
    getOne(email: string): unknown;
    getAll(): unknown;
}
