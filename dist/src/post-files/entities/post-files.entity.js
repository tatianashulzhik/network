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
exports.Post_Files = void 0;
const typeorm_1 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
const files_entity_1 = require("./files.entity");
let Post_Files = class Post_Files extends typeorm_1.BaseEntity {
};
exports.Post_Files = Post_Files;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Post_Files.prototype, "idPostFiles", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Post_Files.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Post_Files.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Post_Files.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.Posts, (idPosts) => idPosts.idPosts),
    __metadata("design:type", typeof (_a = typeof posts_entity_1.Posts !== "undefined" && posts_entity_1.Posts) === "function" ? _a : Object)
], Post_Files.prototype, "idPosts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => files_entity_1.Files, (idFiles) => idFiles.idFiles),
    __metadata("design:type", typeof (_b = typeof files_entity_1.Files !== "undefined" && files_entity_1.Files) === "function" ? _b : Object)
], Post_Files.prototype, "idFiles", void 0);
exports.Post_Files = Post_Files = __decorate([
    (0, typeorm_1.Entity)('post_files')
], Post_Files);
//# sourceMappingURL=post-files.entity.js.map