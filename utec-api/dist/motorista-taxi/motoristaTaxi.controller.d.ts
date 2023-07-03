import { MotoristaTaxiService } from './motoristaTaxi.service';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
export declare class MotoristaTaxiController {
    private motoristaTaxiService;
    constructor(motoristaTaxiService: MotoristaTaxiService);
    add(data: AddMotoristaTaxiDto): Promise<import(".prisma/client").motoristataxi>;
    update(data: UpdateMotoristaTaxiDto): Promise<import(".prisma/client").motoristataxi>;
    remove(codMotoristaTaxi: number): Promise<import(".prisma/client").motoristataxi>;
    getOne(codMotoristaTaxi: number): Promise<import(".prisma/client").motoristataxi>;
    getAll(): Promise<import(".prisma/client").motoristataxi[]>;
}
