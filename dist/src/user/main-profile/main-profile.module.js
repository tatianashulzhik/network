"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const main_profile_entity_1 = require("../entities/main-profile.entity");
const main_profile_service_1 = require("./main-profile.service");
const main_profile_controller_1 = require("./main-profile.controller");
let MainModule = class MainModule {
};
exports.MainModule = MainModule;
exports.MainModule = MainModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([main_profile_entity_1.Main_Profile])],
        providers: [main_profile_service_1.MainProfileService],
        exports: [main_profile_service_1.MainProfileService],
        controllers: [main_profile_controller_1.MainProfileController],
    })
], MainModule);
//# sourceMappingURL=main-profile.module.js.map