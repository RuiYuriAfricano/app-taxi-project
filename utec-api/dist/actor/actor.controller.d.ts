import { ActorService } from './actor.service';
import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
export declare class ActorController {
    private actorService;
    constructor(actorService: ActorService);
    add(data: AddActorDto): Promise<any>;
    update(data: UpdateActorDto): Promise<any>;
    remove(email: string): Promise<any>;
    getOne(email: string): Promise<any>;
    login(loginData: {
        email: string;
        password: string;
    }): Promise<any>;
    getAll(): Promise<any>;
}
