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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaTaxiController = void 0;
const common_1 = require("@nestjs/common");
const motoristaTaxi_service_1 = require("./motoristaTaxi.service");
const addMotoristaTaxiDto_1 = require("./dto/addMotoristaTaxiDto");
const updateMotoristaTaxiDto_1 = require("./dto/updateMotoristaTaxiDto");
let MotoristaTaxiController = class MotoristaTaxiController {
    constructor(motoristaTaxiService) {
        this.motoristaTaxiService = motoristaTaxiService;
    }
    add(data) {
        return this.motoristaTaxiService.add(data);
    }
    update(data) {
        return this.motoristaTaxiService.update(data);
    }
    remove(codMotoristaTaxi) {
        return this.motoristaTaxiService.remove(codMotoristaTaxi);
    }
    getOne(codMotoristaTaxi) {
        return this.motoristaTaxiService.getOne(codMotoristaTaxi);
    }
    getAll() {
        return this.motoristaTaxiService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addMotoristaTaxiDto_1.AddMotoristaTaxiDto]),
    __metadata("design:returntype", void 0)
], MotoristaTaxiController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateMotoristaTaxiDto_1.UpdateMotoristaTaxiDto]),
    __metadata("design:returntype", void 0)
], MotoristaTaxiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':codMotoristaTaxi'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MotoristaTaxiController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':codMotoristaTaxi'),
    __param(0, (0, common_1.Param)('codMotoristaTaxi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MotoristaTaxiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MotoristaTaxiController.prototype, "getAll", null);
MotoristaTaxiController = __decorate([
    (0, common_1.Controller)('motoristaTaxi'),
    __metadata("design:paramtypes", [motoristaTaxi_service_1.MotoristaTaxiService])
], MotoristaTaxiController);
exports.MotoristaTaxiController = MotoristaTaxiController;
//# sourceMappingURL=motoristaTaxi.controller.js.map