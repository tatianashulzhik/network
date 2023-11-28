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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const favorites_entity_1 = require("./entities/favorites.entity");
let FavoritesService = class FavoritesService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAllFavorites() {
        return await this.userRepository.find();
    }
    async insert(userDetails) {
        const favorite = this.userRepository.create(userDetails);
        await this.userRepository.save(favorite);
        return favorite;
    }
    async update(id, data) {
        await this.userRepository.update(id, data);
    }
    async deletBoard(id, name) {
        const result = await this.userRepository.delete(id);
    }
    async findById(idFavorites) {
        return this.userRepository.findOne({ where: { idFavorites } });
    }
};
exports.FavoritesService = FavoritesService;
exports.FavoritesService = FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(favorites_entity_1.Favorites)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], FavoritesService);
//# sourceMappingURL=favorites.service.js.map