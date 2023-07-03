"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxiModule = void 0;
const common_1 = require("@nestjs/common");
const taxi_controller_1 = require("./taxi.controller");
const taxi_service_1 = require("./taxi.service");
const prisma_service_1 = require("../prisma/prisma.service");
let TaxiModule = class TaxiModule {
};
TaxiModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [taxi_controller_1.TaxiController],
        providers: [taxi_service_1.TaxiService, prisma_service_1.PrismaService],
    })
], TaxiModule);
exports.TaxiModule = TaxiModule;
//# sourceMappingURL=taxi.module.js.map