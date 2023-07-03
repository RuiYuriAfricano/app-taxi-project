import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ActorService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddActorDto): Promise<any>;
    update(data: UpdateActorDto): Promise<any>;
    remove(email: string): Promise<any>;
    getOne(email: string): Promise<any>;
    login(email: string, password: string): Promise<any>;
    getAll(): Promise<any>;
}
