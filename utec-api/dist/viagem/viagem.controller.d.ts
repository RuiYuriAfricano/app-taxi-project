import { ViagemService } from './viagem.service';
import { AddViagemDto } from './Dto/addViagemDto';
import { UpdateViagemDto } from './Dto/updateViagemDto';
export declare class ViagemController {
    private viagemService;
    constructor(viagemService: ViagemService);
    add(data: AddViagemDto): Promise<import(".prisma/client").viagem>;
    update(data: UpdateViagemDto): Promise<import(".prisma/client").viagem>;
    remove(codViagem: number): Promise<import(".prisma/client").viagem>;
    getOne(codViagem: number): Promise<import(".prisma/client").viagem>;
    getAll(): Promise<import(".prisma/client").viagem[]>;
}
