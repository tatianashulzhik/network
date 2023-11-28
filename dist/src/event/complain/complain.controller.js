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
exports.ComplainController = void 0;
const common_1 = require("@nestjs/common");
const complain_service_1 = require("./complain.service");
const complain_create_dto_1 = require("../dto/complain-create-dto");
let ComplainController = class ComplainController {
    constructor(ComplainService) {
        this.ComplainService = ComplainService;
    }
    GetAll() {
        return this.ComplainService.getAllMain();
    }
    create(data) {
        return this.ComplainService.insert(data);
    }
    async findById(id) {
        return this.ComplainService.findById(parseInt(id, 10));
    }
};
exports.ComplainController = ComplainController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComplainController.prototype, "GetAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complain_create_dto_1.CreateComplainDto]),
    __metadata("design:returntype", void 0)
], ComplainController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplainController.prototype, "findById", null);
exports.ComplainController = ComplainController = __decorate([
    (0, common_1.Controller)('complain'),
    __metadata("design:paramtypes", [typeof (_a = typeof complain_service_1.ComplainService !== "undefined" && complain_service_1.ComplainService) === "function" ? _a : Object])
], ComplainController);
//# sourceMappingURL=complain.controller.js.map