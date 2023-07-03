import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaTaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaTaxiDto): Promise<any>;
    update(data: UpdateMotoristaTaxiDto): Promise<any>;
    remove(codMotoristaTaxi: number): Promise<any>;
    getOne(codMotoristaTaxi: number): Promise<any>;
    getAll(): Promise<any>;
}
