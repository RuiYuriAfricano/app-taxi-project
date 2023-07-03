import { MotoristaTaxiService } from './motoristaTaxi.service';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
export declare class MotoristaTaxiController {
    private motoristaTaxiService;
    constructor(motoristaTaxiService: MotoristaTaxiService);
    add(data: AddMotoristaTaxiDto): unknown;
    update(data: UpdateMotoristaTaxiDto): unknown;
    remove(codMotoristaTaxi: number): unknown;
    getOne(codMotoristaTaxi: number): unknown;
    getAll(): unknown;
}
