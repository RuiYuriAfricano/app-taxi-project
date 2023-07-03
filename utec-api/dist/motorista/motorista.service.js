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
exports.MotoristaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MotoristaService = class MotoristaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newMotorista = await this.prisma.motorista.create({
            data,
        });
        return newMotorista;
    }
    async update(data) {
        const motoristaR = await this.prisma.motorista.update({
            where: {
                email: data.email,
            },
            data,
        });
        return motoristaR;
    }
    async remove(email) {
        const response = await this.prisma.motorista.delete({
            where: { email },
        });
        return response;
    }
    async getOne(email) {
        const motoristaR = await this.prisma.motorista.findUnique({
            where: {
                email,
            },
        });
        return motoristaR;
    }
    async getAll() {
        const motoristaR = await this.prisma.motorista.findMany();
        return motoristaR;
    }
};
MotoristaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MotoristaService);
exports.MotoristaService = MotoristaService;
//# sourceMappingURL=motorista.service.js.map