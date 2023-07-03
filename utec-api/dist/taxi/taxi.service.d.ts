import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddTaxiDto): unknown;
    update(data: UpdateTaxiDto): unknown;
    remove(codTaxi: number): unknown;
    getOne(codTaxi: number): unknown;
    getAll(): unknown;
}
