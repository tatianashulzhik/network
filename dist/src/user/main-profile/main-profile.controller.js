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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProfileController = void 0;
const common_1 = require("@nestjs/common");
const main_profile_service_1 = require("./main-profile.service");
const main_profile_create_dto_1 = require("../dto/main-profile-create-dto");
let MainProfileController = class MainProfileController {
    constructor(MainProfileService) {
        this.MainProfileService = MainProfileService;
    }
    GetAll() {
        return this.MainProfileService.getAllMain();
    }
    create(data) {
        return this.MainProfileService.insert(data);
    }
};
exports.MainProfileController = MainProfileController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MainProfileController.prototype, "GetAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [main_profile_create_dto_1.CreateMainProfileDto]),
    __metadata("design:returntype", void 0)
], MainProfileController.prototype, "create", null);
exports.MainProfileController = MainProfileController = __decorate([
    (0, common_1.Controller)('main-profile'),
    __metadata("design:paramtypes", [typeof (_a = typeof main_profile_service_1.MainProfileService !== "undefined" && main_profile_service_1.MainProfileService) === "function" ? _a : Object])
], MainProfileController);
//# sourceMappingURL=main-profile.controller.js.map