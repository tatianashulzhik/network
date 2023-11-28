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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const typeorm_1 = require("typeorm");
const privacy_entity_1 = require("../../privacy/entities/privacy.entity");
let Posts = class Posts extends typeorm_1.BaseEntity {
};
exports.Posts = Posts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Posts.prototype, "idPosts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Posts.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Posts.prototype, "plasePosition", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Posts.prototype, "tagAPerson", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Posts.prototype, "hashtag", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Posts.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Posts.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Posts.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => privacy_entity_1.Privacy, (idPrivacy) => idPrivacy.idPrivacy),
    __metadata("design:type", typeof (_a = typeof privacy_entity_1.Privacy !== "undefined" && privacy_entity_1.Privacy) === "function" ? _a : Object)
], Posts.prototype, "idPrivacy", void 0);
exports.Posts = Posts = __decorate([
    (0, typeorm_1.Entity)('posts')
], Posts);
//# sourceMappingURL=posts.entity.js.map