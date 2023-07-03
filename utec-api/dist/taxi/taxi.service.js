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
exports.TaxiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TaxiService = class TaxiService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newTaxi = await this.prisma.taxi.create({
            data,
        });
        return newTaxi;
    }
    async update(data) {
        data.codTaxi = Number(data?.codTaxi);
        const taxiR = await this.prisma.taxi.update({
            where: {
                codTaxi: data.codTaxi,
            },
            data,
        });
        return taxiR;
    }
    async remove(codTaxi) {
        const response = await this.prisma.taxi.delete({
            where: { codTaxi },
        });
        return response;
    }
    async getOne(codTaxi) {
        const taxiR = await this.prisma.taxi.findUnique({
            where: {
                codTaxi,
            },
        });
        return taxiR;
    }
    async getAll() {
        const taxisR = await this.prisma.taxi.findMany();
        return taxisR;
    }
};
TaxiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TaxiService);
exports.TaxiService = TaxiService;
//# sourceMappingURL=taxi.service.js.map