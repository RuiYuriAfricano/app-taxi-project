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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClienteService = class ClienteService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newCliente = await this.prisma.cliente.create({
            data,
        });
        return newCliente;
    }
    async update(data) {
        const clienteR = await this.prisma.cliente.update({
            where: {
                clienteEmail: data.clienteEmail,
            },
            data,
        });
        return clienteR;
    }
    async remove(clienteEmail) {
        const response = await this.prisma.cliente.delete({
            where: { clienteEmail },
        });
        return response;
    }
    async getOne(clienteEmail) {
        const clienteR = await this.prisma.cliente.findUnique({
            where: {
                clienteEmail,
            },
        });
        return clienteR;
    }
    async getAll() {
        const clientesR = await this.prisma.cliente.findMany();
        return clientesR;
    }
};
ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClienteService);
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map