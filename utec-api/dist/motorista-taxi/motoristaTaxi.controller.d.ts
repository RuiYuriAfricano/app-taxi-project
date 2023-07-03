import { MotoristaTaxiService } from './motoristaTaxi.service';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
export declare class MotoristaTaxiController {
    private motoristaTaxiService;
    constructor(motoristaTaxiService: MotoristaTaxiService);
    add(data: AddMotoristaTaxiDto): Promise<any>;
    update(data: UpdateMotoristaTaxiDto): Promise<any>;
    remove(codMotoristaTaxi: number): Promise<any>;
    getOne(codMotoristaTaxi: number): Promise<any>;
    getAll(): Promise<any>;
}
