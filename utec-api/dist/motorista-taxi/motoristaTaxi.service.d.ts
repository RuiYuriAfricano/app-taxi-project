import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaTaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaTaxiDto): Promise<import(".prisma/client").motoristataxi>;
    update(data: UpdateMotoristaTaxiDto): Promise<import(".prisma/client").motoristataxi>;
    remove(codMotoristaTaxi: number): Promise<import(".prisma/client").motoristataxi>;
    getOne(codMotoristaTaxi: number): Promise<import(".prisma/client").motoristataxi>;
    getAll(): Promise<import(".prisma/client").motoristataxi[]>;
}
