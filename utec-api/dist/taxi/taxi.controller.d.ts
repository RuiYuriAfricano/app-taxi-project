import { TaxiService } from './taxi.service';
import { AddTaxiDto } from './dto/addTaxiDto';
import { UpdateTaxiDto } from './dto/updateTaxiDto';
export declare class TaxiController {
    private taxiService;
    constructor(taxiService: TaxiService);
    add(data: AddTaxiDto): Promise<import("@prisma/client/runtime").GetResult<{
        codTaxi: number;
        x: string;
        y: string;
        id_TDV: number;
        vmPorKM: number;
        precoBasePorKM: number;
        disponibilidade: string;
        filaEspera: string;
        id_empresa: number;
    }, unknown> & {}>;
    update(data: UpdateTaxiDto): Promise<import("@prisma/client/runtime").GetResult<{
        codTaxi: number;
        x: string;
        y: string;
        id_TDV: number;
        vmPorKM: number;
        precoBasePorKM: number;
        disponibilidade: string;
        filaEspera: string;
        id_empresa: number;
    }, unknown> & {}>;
    remove(codTaxi: number): Promise<import("@prisma/client/runtime").GetResult<{
        codTaxi: number;
        x: string;
        y: string;
        id_TDV: number;
        vmPorKM: number;
        precoBasePorKM: number;
        disponibilidade: string;
        filaEspera: string;
        id_empresa: number;
    }, unknown> & {}>;
    getOne(codTaxi: number): Promise<import("@prisma/client/runtime").GetResult<{
        codTaxi: number;
        x: string;
        y: string;
        id_TDV: number;
        vmPorKM: number;
        precoBasePorKM: number;
        disponibilidade: string;
        filaEspera: string;
        id_empresa: number;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        codTaxi: number;
        x: string;
        y: string;
        id_TDV: number;
        vmPorKM: number;
        precoBasePorKM: number;
        disponibilidade: string;
        filaEspera: string;
        id_empresa: number;
    }, unknown> & {})[]>;
}
