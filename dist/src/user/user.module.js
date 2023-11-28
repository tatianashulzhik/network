"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const contacts_entity_1 = require("./entities/contacts.entity");
const edications_entity_1 = require("./entities/edications.entity");
const gender_entity_1 = require("./entities/gender.entity");
const last_place_of_work_entity_1 = require("./entities/last-place-of-work.entity");
const main_profile_entity_1 = require("./entities/main-profile.entity");
const user_activity_entity_1 = require("./entities/user-activity.entity");
const user_entity_1 = require("./entities/user.entity");
const user_service_1 = require("./user.service");
const user_controller_1 = require("./user.controller");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contacts_entity_1.Contacts, edications_entity_1.Edications, gender_entity_1.Gender, last_place_of_work_entity_1.Last_place_of_work, main_profile_entity_1.Main_Profile, user_entity_1.User, user_activity_entity_1.User_Activity]),
        ],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
        controllers: [user_controller_1.UserController],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map