import { TaxiService } from './taxi.service';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
export declare class TaxiController {
    private taxiService;
    constructor(taxiService: TaxiService);
    add(data: AddTaxiDto): unknown;
    update(data: UpdateTaxiDto): unknown;
    remove(codTaxi: number): unknown;
    getOne(codTaxi: number): unknown;
    getAll(): unknown;
}
