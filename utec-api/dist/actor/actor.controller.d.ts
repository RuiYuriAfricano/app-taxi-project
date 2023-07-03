import { ActorService } from './actor.service';
import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
export declare class ActorController {
    private actorService;
    constructor(actorService: ActorService);
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
    login(loginData: {
        email: string;
        password: string;
    }): Promise<{
        cliente: (import("@prisma/client/runtime").GetResult<{
            clienteEmail: string;
            x: string;
            y: string;
        }, unknown> & {})[];
        motorista: (import("@prisma/client/runtime").GetResult<{
            email: string;
            destreza: string;
            id_empresa: number;
        }, unknown> & {})[];
    } & import("@prisma/client/runtime").GetResult<{
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
