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
exports.MotoristaController = void 0;
const common_1 = require("@nestjs/common");
const motorista_service_1 = require("./motorista.service");
const addMotoristaDto_1 = require("./dto/addMotoristaDto");
const updateMotoristaDto_1 = require("./dto/updateMotoristaDto");
let MotoristaController = class MotoristaController {
    constructor(motoristaService) {
        this.motoristaService = motoristaService;
    }
    add(data) {
        return this.motoristaService.add(data);
    }
    update(data) {
        return this.motoristaService.update(data);
    }
    remove(email) {
        return this.motoristaService.remove(email);
    }
    getOne(email) {
        return this.motoristaService.getOne(email);
    }
    getAll() {
        return this.motoristaService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addMotoristaDto_1.AddMotoristaDto]),
    __metadata("design:returntype", void 0)
], MotoristaController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateMotoristaDto_1.UpdateMotoristaDto]),
    __metadata("design:returntype", void 0)
], MotoristaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MotoristaController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MotoristaController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MotoristaController.prototype, "getAll", null);
MotoristaController = __decorate([
    (0, common_1.Controller)('motorista'),
    __metadata("design:paramtypes", [motorista_service_1.MotoristaService])
], MotoristaController);
exports.MotoristaController = MotoristaController;
//# sourceMappingURL=motorista.controller.js.map