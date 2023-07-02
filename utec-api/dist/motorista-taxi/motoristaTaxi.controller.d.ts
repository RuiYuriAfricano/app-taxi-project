import { MotoristaTaxiService } from './motoristaTaxi.service';
import { AddMotoristaTaxiDto } from './dto/addMotoristaTaxiDto';
import { UpdateMotoristaTaxiDto } from './dto/updateMotoristaTaxiDto';
export declare class MotoristaTaxiController {
    private motoristaTaxiService;
    constructor(motoristaTaxiService: MotoristaTaxiService);
    add(data: AddMotoristaTaxiDto): Promise<import("@prisma/client/runtime").GetResult<{
        codMotoristaTaxi: number;
        id_taxi: number;
        id_motorista: string;
    }, unknown> & {}>;
    update(data: UpdateMotoristaTaxiDto): Promise<import("@prisma/client/runtime").GetResult<{
        codMotoristaTaxi: number;
        id_taxi: number;
        id_motorista: string;
    }, unknown> & {}>;
    remove(codMotoristaTaxi: number): Promise<import("@prisma/client/runtime").GetResult<{
        codMotoristaTaxi: number;
        id_taxi: number;
        id_motorista: string;
    }, unknown> & {}>;
    getOne(codMotoristaTaxi: number): Promise<import("@prisma/client/runtime").GetResult<{
        codMotoristaTaxi: number;
        id_taxi: number;
        id_motorista: string;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        codMotoristaTaxi: number;
        id_taxi: number;
        id_motorista: string;
    }, unknown> & {})[]>;
}
