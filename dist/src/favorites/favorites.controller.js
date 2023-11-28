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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesController = void 0;
const common_1 = require("@nestjs/common");
const favorites_service_1 = require("./favorites.service");
const favorite_create_dto_1 = require("./dto/favorite-create-dto");
const favorites_entity_1 = require("./entities/favorites.entity");
let FavoritesController = class FavoritesController {
    constructor(FavoritesService) {
        this.FavoritesService = FavoritesService;
    }
    GetAll() {
        return this.FavoritesService.getAllFavorites();
    }
    create(data) {
        return this.FavoritesService.insert(data);
    }
    async update(id, todo) {
        this.FavoritesService.update(parseInt(id, 10), todo);
    }
    deleteBoard(id, user) {
        return this.FavoritesService.deletBoard(id, user);
    }
    async findById(id) {
        return this.FavoritesService.findById(parseInt(id, 10));
    }
};
exports.FavoritesController = FavoritesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "GetAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favorite_create_dto_1.CreateFavoritesDto]),
    __metadata("design:returntype", void 0)
], FavoritesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof favorites_entity_1.Favorites !== "undefined" && favorites_entity_1.Favorites) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof favorites_entity_1.Favorites !== "undefined" && favorites_entity_1.Favorites) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "deleteBoard", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoritesController.prototype, "findById", null);
exports.FavoritesController = FavoritesController = __decorate([
    (0, common_1.Controller)('favorites'),
    __metadata("design:paramtypes", [typeof (_a = typeof favorites_service_1.FavoritesService !== "undefined" && favorites_service_1.FavoritesService) === "function" ? _a : Object])
], FavoritesController);
//# sourceMappingURL=favorites.controller.js.map