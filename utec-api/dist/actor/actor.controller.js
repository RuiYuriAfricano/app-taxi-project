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
exports.ActorController = void 0;
const common_1 = require("@nestjs/common");
const actor_service_1 = require("./actor.service");
const addActorDto_1 = require("./dto/addActorDto");
const updateActorDto_1 = require("./dto/updateActorDto");
let ActorController = class ActorController {
    constructor(actorService) {
        this.actorService = actorService;
    }
    add(data) {
        return this.actorService.add(data);
    }
    update(data) {
        return this.actorService.update(data);
    }
    remove(email) {
        return this.actorService.remove(email);
    }
    getOne(email) {
        return this.actorService.getOne(email);
    }
    login(loginData) {
        const { email, password } = loginData;
        return this.actorService.login(email, password);
    }
    getAll() {
        return this.actorService.getAll();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addActorDto_1.AddActorDto]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateActorDto_1.UpdateActorDto]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActorController.prototype, "getAll", null);
ActorController = __decorate([
    (0, common_1.Controller)('actor'),
    __metadata("design:paramtypes", [actor_service_1.ActorService])
], ActorController);
exports.ActorController = ActorController;
//# sourceMappingURL=actor.controller.js.map