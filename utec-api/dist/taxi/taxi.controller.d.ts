import { TaxiService } from './taxi.service';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
export declare class TaxiController {
    private taxiService;
    constructor(taxiService: TaxiService);
    add(data: AddTaxiDto): Promise<import(".prisma/client").taxi>;
    update(data: UpdateTaxiDto): Promise<import(".prisma/client").taxi>;
    remove(codTaxi: number): Promise<import(".prisma/client").taxi>;
    getOne(codTaxi: number): Promise<import(".prisma/client").taxi>;
    getAll(): Promise<import(".prisma/client").taxi[]>;
}
