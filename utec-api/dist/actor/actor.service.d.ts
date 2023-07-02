import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ActorService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddActorDto): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {}>;
    update(data: UpdateActorDto): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {}>;
    remove(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {}>;
    getOne(email: string): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {}>;
    login(email: string, password: string): Promise<import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        email: string;
        morada: string;
        password: string;
        datanasc: Date;
    }, unknown> & {})[]>;
}
