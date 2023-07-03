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
exports.TipoDeViaturaController = void 0;
const common_1 = require("@nestjs/common");
const tipoDeViatura_service_1 = require("./tipoDeViatura.service");
const addTipoDeViaturaDto_1 = require("./Dto/addTipoDeViaturaDto");
const updateTipoDeViaturaDto_1 = require("./Dto/updateTipoDeViaturaDto");
let TipoDeViaturaController = exports.TipoDeViaturaController = class TipoDeViaturaController {
    constructor(tipoDeViaturaService) {
        this.tipoDeViaturaService = tipoDeViaturaService;
    }
    add(data) {
        return this.tipoDeViaturaService.add(data);
    }
    update(data) {
        return this.tipoDeViaturaService.update(data);
    }
    remove(codTDV) {
        return this.tipoDeViaturaService.remove(codTDV);
    }
    getOne(codTDV) {
        return this.tipoDeViaturaService.getOne(codTDV);
    }
    getAll() {
        return this.tipoDeViaturaService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addTipoDeViaturaDto_1.AddTipoDeViaturaDto]),
    __metadata("design:returntype", void 0)
], TipoDeViaturaController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateTipoDeViaturaDto_1.UpdateTipoDeViaturaDto]),
    __metadata("design:returntype", void 0)
], TipoDeViaturaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':codTDV'),
    __param(0, (0, common_1.Param)('codTDV')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoDeViaturaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':codTDV'),
    __param(0, (0, common_1.Param)('codTDV')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TipoDeViaturaController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TipoDeViaturaController.prototype, "getAll", null);
exports.TipoDeViaturaController = TipoDeViaturaController = __decorate([
    (0, common_1.Controller)('tipoDeViatura'),
    __metadata("design:paramtypes", [tipoDeViatura_service_1.TipoDeViaturaService])
], TipoDeViaturaController);
//# sourceMappingURL=tipoDeViatura.controller.js.map