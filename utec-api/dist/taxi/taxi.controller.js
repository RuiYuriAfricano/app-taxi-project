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
exports.TaxiController = void 0;
const common_1 = require("@nestjs/common");
const taxi_service_1 = require("./taxi.service");
const addTaxiDto_1 = require("./dto/addTaxiDto");
const updateTaxiDto_1 = require("./dto/updateTaxiDto");
let TaxiController = exports.TaxiController = class TaxiController {
    constructor(taxiService) {
        this.taxiService = taxiService;
    }
    add(data) {
        return this.taxiService.add(data);
    }
    update(data) {
        return this.taxiService.update(data);
    }
    remove(codTaxi) {
        return this.taxiService.remove(codTaxi);
    }
    getOne(codTaxi) {
        return this.taxiService.getOne(codTaxi);
    }
    getAll() {
        return this.taxiService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addTaxiDto_1.AddTaxiDto]),
    __metadata("design:returntype", void 0)
], TaxiController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateTaxiDto_1.UpdateTaxiDto]),
    __metadata("design:returntype", void 0)
], TaxiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':codTaxi'),
    __param(0, (0, common_1.Param)('codTaxi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaxiController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':codTaxi'),
    __param(0, (0, common_1.Param)('codTaxi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaxiController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaxiController.prototype, "getAll", null);
exports.TaxiController = TaxiController = __decorate([
    (0, common_1.Controller)('taxi'),
    __metadata("design:paramtypes", [taxi_service_1.TaxiService])
], TaxiController);
//# sourceMappingURL=taxi.controller.js.map