import { AddTipoDeViaturaDto } from './Dto/addTipoDeViaturaDto';
import { UpdateTipoDeViaturaDto } from './Dto/updateTipoDeViaturaDto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class TipoDeViaturaService {
    private prisma;
    constructor(prisma: PrismaService);
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
