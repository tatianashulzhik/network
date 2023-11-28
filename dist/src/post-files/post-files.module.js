"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PFModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const post_files_entity_1 = require("./entities/post-files.entity");
const posts_entity_1 = require("./entities/posts.entity");
const files_entity_1 = require("./entities/files.entity");
let PFModule = class PFModule {
};
exports.PFModule = PFModule;
exports.PFModule = PFModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([post_files_entity_1.Post_Files, files_entity_1.Files, posts_entity_1.Posts])],
    })
], PFModule);
//# sourceMappingURL=post-files.module.js.map