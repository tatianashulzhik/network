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
exports.ComplainService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const complain_entity_1 = require("../entities/complain.entity");
let ComplainService = class ComplainService {
    constructor(complainRepository) {
        this.complainRepository = complainRepository;
    }
    async getAllMain() {
        return await this.complainRepository.find();
    }
    async insert(catsDetails) {
        const mainprofile = this.complainRepository.create(catsDetails);
        await this.complainRepository.save(mainprofile);
        return mainprofile;
    }
    async findById(idComplain) {
        return this.complainRepository.findOne({ where: { idComplain } });
    }
};
exports.ComplainService = ComplainService;
exports.ComplainService = ComplainService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(complain_entity_1.Complain)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ComplainService);
//# sourceMappingURL=complain.service.js.map