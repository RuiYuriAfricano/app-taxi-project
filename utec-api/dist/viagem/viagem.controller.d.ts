import { ViagemService } from './viagem.service';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
export declare class ViagemController {
    private viagemService;
    constructor(viagemService: ViagemService);
    add(data: AddViagemDto): unknown;
    update(data: UpdateViagemDto): unknown;
    remove(codViagem: number): unknown;
    getOne(codViagem: number): unknown;
    getAll(): unknown;
}
