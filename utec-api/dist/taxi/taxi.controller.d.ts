import { TaxiService } from './taxi.service';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
export declare class TaxiController {
    private taxiService;
    constructor(taxiService: TaxiService);
    add(data: AddTaxiDto): Promise<any>;
    update(data: UpdateTaxiDto): Promise<any>;
    remove(codTaxi: number): Promise<any>;
    getOne(codTaxi: number): Promise<any>;
    getAll(): Promise<any>;
}
