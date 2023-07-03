import { TipoDeViaturaService } from './tipoDeViatura.service';
import { AddTipoDeViaturaDto } from './Dto/addTipoDeViaturaDto';
import { UpdateTipoDeViaturaDto } from './Dto/updateTipoDeViaturaDto';
export declare class TipoDeViaturaController {
    private tipoDeViaturaService;
    constructor(tipoDeViaturaService: TipoDeViaturaService);
    add(data: AddTipoDeViaturaDto): Promise<import("@prisma/client/runtime").GetResult<{
        codTDV: number;
        tipo: string;
    }, unknown> & {}>;
    update(data: UpdateTipoDeViaturaDto): Promise<import("@prisma/client/runtime").GetResult<{
        codTDV: number;
        tipo: string;
    }, unknown> & {}>;
    remove(codTDV: number): Promise<import("@prisma/client/runtime").GetResult<{
        codTDV: number;
        tipo: string;
    }, unknown> & {}>;
    getOne(codTDV: number): Promise<import("@prisma/client/runtime").GetResult<{
        codTDV: number;
        tipo: string;
    }, unknown> & {}>;
    getAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        codTDV: number;
        tipo: string;
    }, unknown> & {})[]>;
}
