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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorites = void 0;
const typeorm_1 = require("typeorm");
const user_activity_entity_1 = require("../../user/entities/user-activity.entity");
const posts_entity_1 = require("../../post-files/entities/posts.entity");
let Favorites = class Favorites extends typeorm_1.BaseEntity {
};
exports.Favorites = Favorites;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Favorites.prototype, "idFavorites", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", String)
], Favorites.prototype, "folder", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Favorites.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Favorites.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_activity_entity_1.User_Activity, (idUserActivity) => idUserActivity.idUserActivity),
    __metadata("design:type", typeof (_a = typeof user_activity_entity_1.User_Activity !== "undefined" && user_activity_entity_1.User_Activity) === "function" ? _a : Object)
], Favorites.prototype, "idUserActivity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.Posts, (idPosts) => idPosts.idPosts),
    __metadata("design:type", typeof (_b = typeof posts_entity_1.Posts !== "undefined" && posts_entity_1.Posts) === "function" ? _b : Object)
], Favorites.prototype, "idPosts", void 0);
exports.Favorites = Favorites = __decorate([
    (0, typeorm_1.Entity)('favorites')
], Favorites);
//# sourceMappingURL=favorites.entity.js.map