import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ActorService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddActorDto): Promise<import(".prisma/client").actor>;
    update(data: UpdateActorDto): Promise<import(".prisma/client").actor>;
    remove(email: string): Promise<import(".prisma/client").actor>;
    getOne(email: string): Promise<import(".prisma/client").actor>;
    login(email: string, password: string): Promise<import(".prisma/client").actor & {
        cliente: import(".prisma/client").cliente[];
        motorista: import(".prisma/client").motorista[];
    }>;
    getAll(): Promise<import(".prisma/client").actor[]>;
}
