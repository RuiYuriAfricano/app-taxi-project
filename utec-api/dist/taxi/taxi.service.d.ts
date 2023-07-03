import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddTaxiDto): Promise<any>;
    update(data: UpdateTaxiDto): Promise<any>;
    remove(codTaxi: number): Promise<any>;
    getOne(codTaxi: number): Promise<any>;
    getAll(): Promise<any>;
}
