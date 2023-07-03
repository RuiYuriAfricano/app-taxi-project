import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddTaxiDto): Promise<import(".prisma/client").taxi>;
    update(data: UpdateTaxiDto): Promise<import(".prisma/client").taxi>;
    remove(codTaxi: number): Promise<import(".prisma/client").taxi>;
    getOne(codTaxi: number): Promise<import(".prisma/client").taxi>;
    getAll(): Promise<import(".prisma/client").taxi[]>;
}
