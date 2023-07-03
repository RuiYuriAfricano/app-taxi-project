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
exports.ViagemController = void 0;
const common_1 = require("@nestjs/common");
const viagem_service_1 = require("./viagem.service");
const addViagemDto_1 = require("./Dto/addViagemDto");
const updateViagemDto_1 = require("./Dto/updateViagemDto");
let ViagemController = exports.ViagemController = class ViagemController {
    constructor(viagemService) {
        this.viagemService = viagemService;
    }
    add(data) {
        return this.viagemService.add(data);
    }
    update(data) {
        return this.viagemService.update(data);
    }
    remove(codViagem) {
        return this.viagemService.remove(codViagem);
    }
    getOne(codViagem) {
        return this.viagemService.getOne(codViagem);
    }
    getAll() {
        return this.viagemService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addViagemDto_1.AddViagemDto]),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateViagemDto_1.UpdateViagemDto]),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':codViagem'),
    __param(0, (0, common_1.Param)('codViagem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':codViagem'),
    __param(0, (0, common_1.Param)('codViagem')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViagemController.prototype, "getAll", null);
exports.ViagemController = ViagemController = __decorate([
    (0, common_1.Controller)('viagem'),
    __metadata("design:paramtypes", [viagem_service_1.ViagemService])
], ViagemController);
//# sourceMappingURL=viagem.controller.js.map