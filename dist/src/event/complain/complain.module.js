"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const complain_entity_1 = require("../entities/complain.entity");
const complain_service_1 = require("./complain.service");
const complain_controller_1 = require("./complain.controller");
let ComplainModule = class ComplainModule {
};
exports.ComplainModule = ComplainModule;
exports.ComplainModule = ComplainModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([complain_entity_1.Complain]),
        ],
        providers: [complain_service_1.ComplainService],
        exports: [complain_service_1.ComplainService],
        controllers: [complain_controller_1.ComplainController],
    })
], ComplainModule);
//# sourceMappingURL=complain.module.js.map