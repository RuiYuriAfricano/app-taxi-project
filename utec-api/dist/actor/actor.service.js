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
exports.ActorService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ActorService = exports.ActorService = class ActorService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async add(data) {
        const newActor = await this.prisma.actor.create({
            data,
        });
        return newActor;
    }
    async update(data) {
        const actorR = await this.prisma.actor.update({
            where: {
                email: data.email,
            },
            data,
        });
        return actorR;
    }
    async remove(email) {
        const response = await this.prisma.actor.delete({
            where: { email },
        });
        return response;
    }
    async getOne(email) {
        const actorR = await this.prisma.actor.findUnique({
            where: {
                email,
            },
        });
        return actorR;
    }
    async login(email, password) {
        const actorR = await this.prisma.actor.findFirst({
            where: {
                email: email,
                password: password,
            },
            include: {
                cliente: true,
                motorista: true,
            },
        });
        return actorR;
    }
    async getAll() {
        const actoresR = await this.prisma.actor.findMany();
        return actoresR;
    }
};
exports.ActorService = ActorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ActorService);
//# sourceMappingURL=actor.service.js.map