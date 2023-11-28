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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const main_profile_entity_1 = require("./main-profile.entity");
const contacts_entity_1 = require("./contacts.entity");
const gender_entity_1 = require("./gender.entity");
const last_place_of_work_entity_1 = require("./last-place-of-work.entity");
const edications_entity_1 = require("./edications.entity");
const user_activity_entity_1 = require("./user-activity.entity");
let User = class User extends typeorm_1.BaseEntity {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], User.prototype, "idUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "dataOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "region", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", String)
], User.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => main_profile_entity_1.Main_Profile, (idMainProfile) => idMainProfile.idMainProfile),
    __metadata("design:type", typeof (_a = typeof main_profile_entity_1.Main_Profile !== "undefined" && main_profile_entity_1.Main_Profile) === "function" ? _a : Object)
], User.prototype, "idMainProfile", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contacts_entity_1.Contacts, (idContacts) => idContacts.idContacts),
    __metadata("design:type", typeof (_b = typeof contacts_entity_1.Contacts !== "undefined" && contacts_entity_1.Contacts) === "function" ? _b : Object)
], User.prototype, "idContacts", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => gender_entity_1.Gender, (idGender) => idGender.idGender),
    __metadata("design:type", typeof (_c = typeof gender_entity_1.Gender !== "undefined" && gender_entity_1.Gender) === "function" ? _c : Object)
], User.prototype, "idGender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => last_place_of_work_entity_1.Last_place_of_work, (idLastPlaceOfWork) => idLastPlaceOfWork.idLastPlaceOfWork),
    __metadata("design:type", typeof (_d = typeof last_place_of_work_entity_1.Last_place_of_work !== "undefined" && last_place_of_work_entity_1.Last_place_of_work) === "function" ? _d : Object)
], User.prototype, "idLastPlaceOfWork", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => edications_entity_1.Edications, (idEdications) => idEdications.idEdications),
    __metadata("design:type", typeof (_e = typeof edications_entity_1.Edications !== "undefined" && edications_entity_1.Edications) === "function" ? _e : Object)
], User.prototype, "idEdications", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_activity_entity_1.User_Activity, (idUserActivity) => idUserActivity.idUserActivity),
    __metadata("design:type", typeof (_f = typeof user_activity_entity_1.User_Activity !== "undefined" && user_activity_entity_1.User_Activity) === "function" ? _f : Object)
], User.prototype, "idUserActivity", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('user')
], User);
//# sourceMappingURL=user.entity.js.map