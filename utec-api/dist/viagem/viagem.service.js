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
exports.ViagemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const taxi_controller_1 = require("../taxi/taxi.controller");
const taxi_service_1 = require("../taxi/taxi.service");
let ViagemService = exports.ViagemService = class ViagemService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newViagem = await this.prisma.viagem.create({
            data,
        });
        return newViagem;
    }
    async update(data) {
        data.codViagem = Number(data?.codViagem);
        const viagemR = await this.prisma.viagem.update({
            where: {
                codViagem: data.codViagem,
            },
            data,
        });
        return viagemR;
    }
    async remove(codViagem) {
        const response = await this.prisma.viagem.delete({
            where: { codViagem },
        });
        return response;
    }
    async estimar(codTaxi, xOrigem, yOrigem, xDestino, yDestino) {
        const distX = Math.pow(Number(xDestino) - Number(xOrigem), 2);
        const distY = Math.pow(Number(yDestino) - Number(yOrigem), 2);
        const dist = Math.sqrt(distX + distY);
        const prisma = new prisma_service_1.PrismaService();
        const taxiService = new taxi_service_1.TaxiService(prisma);
        const taxiController = new taxi_controller_1.TaxiController(taxiService);
        const taxi = await taxiController.getOne(codTaxi);
        if (!taxi) {
            return -1;
        }
        let tempoEstimado = dist / taxi.vmPorKM;
        let precoEstimado = dist * taxi.precoBasePorKM;
        let distTaxiCliente = Math.sqrt(Math.pow((Number(xOrigem) - Number(taxi.x)), 2)
            +
                Math.pow((Number(yOrigem) - Number(taxi.y)), 2));
        let tempoTaxiCliente = distTaxiCliente / taxi.vmPorKM;
        const estimacao = {
            tempo: tempoEstimado,
            precoEstimado: precoEstimado,
            tempoDoTaxiAoCliente: tempoTaxiCliente
        };
        return estimacao;
    }
    async getOne(codViagem) {
        const viagemR = await this.prisma.viagem.findUnique({
            where: {
                codViagem,
            },
        });
        return viagemR;
    }
    async getAll() {
        const viagensR = await this.prisma.viagem.findMany();
        return viagensR;
    }
};
exports.ViagemService = ViagemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ViagemService);
//# sourceMappingURL=viagem.service.js.map