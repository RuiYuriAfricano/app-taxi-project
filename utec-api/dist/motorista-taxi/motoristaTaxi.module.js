"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaTaxiModule = void 0;
const common_1 = require("@nestjs/common");
const motoristaTaxi_controller_1 = require("./motoristaTaxi.controller");
const motoristaTaxi_service_1 = require("./motoristaTaxi.service");
const prisma_service_1 = require("../prisma/prisma.service");
let MotoristaTaxiModule = class MotoristaTaxiModule {
};
MotoristaTaxiModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [motoristaTaxi_controller_1.MotoristaTaxiController],
        providers: [motoristaTaxi_service_1.MotoristaTaxiService, prisma_service_1.PrismaService],
    })
], MotoristaTaxiModule);
exports.MotoristaTaxiModule = MotoristaTaxiModule;
//# sourceMappingURL=motoristaTaxi.module.js.map