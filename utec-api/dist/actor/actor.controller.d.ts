import { ActorService } from './actor.service';
import { AddActorDto } from './dto/addActorDto';
import { UpdateActorDto } from './dto/updateActorDto';
export declare class ActorController {
    private actorService;
    constructor(actorService: ActorService);
    add(data: AddActorDto): unknown;
    update(data: UpdateActorDto): unknown;
    remove(email: string): unknown;
    getOne(email: string): unknown;
    login(loginData: {
        email: string;
        password: string;
    }): unknown;
    getAll(): unknown;
}
