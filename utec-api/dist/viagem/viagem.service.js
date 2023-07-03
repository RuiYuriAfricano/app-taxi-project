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