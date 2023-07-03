import { AddMotoristaDto } from './dto/addMotoristaDto';
import { UpdateMotoristaDto } from './dto/updateMotoristaDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaDto): Promise<import(".prisma/client").motorista>;
    update(data: UpdateMotoristaDto): Promise<import(".prisma/client").motorista>;
    remove(email: string): Promise<import(".prisma/client").motorista>;
    getOne(email: string): Promise<import(".prisma/client").motorista>;
    getAll(): Promise<import(".prisma/client").motorista[]>;
}
