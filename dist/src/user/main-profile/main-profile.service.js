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
exports.MainProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const main_profile_entity_1 = require("../entities/main-profile.entity");
let MainProfileService = class MainProfileService {
    constructor(mainRepository) {
        this.mainRepository = mainRepository;
    }
    async getAllMain() {
        return await this.mainRepository.find();
    }
    async insert(catsDetails) {
        const mainprofile = this.mainRepository.create(catsDetails);
        await this.mainRepository.save(mainprofile);
        return mainprofile;
    }
};
exports.MainProfileService = MainProfileService;
exports.MainProfileService = MainProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(main_profile_entity_1.Main_Profile)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], MainProfileService);
//# sourceMappingURL=main-profile.service.js.map