"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaTaxiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MotoristaTaxiService = exports.MotoristaTaxiService = class MotoristaTaxiService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newMotoristaTaxi = await this.prisma.motoristataxi.create({
            data,
        });
        return newMotoristaTaxi;
    }
    async update(data) {
        data.codMotoristaTaxi = Number(data?.codMotoristaTaxi);
        const motoristaTaxiR = await this.prisma.motoristataxi.update({
            where: {
                codMotoristaTaxi: data.codMotoristaTaxi,
            },
            data,
        });
        return motoristaTaxiR;
    }
    async remove(codMotoristaTaxi) {
        const response = await this.prisma.motoristataxi.delete({
            where: { codMotoristaTaxi },
        });
        return response;
    }
    async getOne(codMotoristaTaxi) {
        const motoristaTaxiR = await this.prisma.motoristataxi.findUnique({
            where: {
                codMotoristaTaxi: codMotoristaTaxi,
            },
        });
        return motoristaTaxiR;
    }
    async getMotoristasTaxiComFilaEspera() {
        const motoristaTaxiR = await this.prisma.motoristataxi.findMany({
            where: {
                taxi: {
                    filaEspera: '1'
                }
            }
        });
        return motoristaTaxiR;
    }
    async getMotoristasTaxiComDisponibilidadeAtiva() {
        const motoristaTaxiR = await this.prisma.motoristataxi.findMany({
            where: {
                taxi: {
                    disponibilidade: 'activada'
                }
            }
        });
        return motoristaTaxiR;
    }
    async getAll() {
        const motoristaTaxiR = await this.prisma.motoristataxi.findMany();
        return motoristaTaxiR;
    }
};
exports.MotoristaTaxiService = MotoristaTaxiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MotoristaTaxiService);
//# sourceMappingURL=motoristaTaxi.service.js.map