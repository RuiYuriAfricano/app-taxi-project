import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ActorService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddActorDto): unknown;
    update(data: UpdateActorDto): unknown;
    remove(email: string): unknown;
    getOne(email: string): unknown;
    login(email: string, password: string): unknown;
    getAll(): unknown;
}
