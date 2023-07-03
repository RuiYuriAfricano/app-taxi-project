"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const actor_module_1 = require("./actor/actor.module");
const cliente_module_1 = require("./cliente/cliente.module");
const motorista_module_1 = require("./motorista/motorista.module");
const motoristaTaxi_module_1 = require("./motorista-taxi/motoristaTaxi.module");
const taxi_module_1 = require("./taxi/taxi.module");
const viagem_module_1 = require("./viagem/viagem.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [actor_module_1.ActorModule, cliente_module_1.ClienteModule, motorista_module_1.MotoristaModule, motoristaTaxi_module_1.MotoristaTaxiModule, taxi_module_1.TaxiModule, viagem_module_1.ViagemModule],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map