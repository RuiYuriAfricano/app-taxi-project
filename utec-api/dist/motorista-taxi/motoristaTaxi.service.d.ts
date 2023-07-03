import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MotoristaTaxiService {
    private prisma;
    constructor(prisma: PrismaService);
    add(data: AddMotoristaTaxiDto): unknown;
    update(data: UpdateMotoristaTaxiDto): unknown;
    remove(codMotoristaTaxi: number): unknown;
    getOne(codMotoristaTaxi: number): unknown;
    getAll(): unknown;
}
