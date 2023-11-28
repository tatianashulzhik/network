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
exports.Contacts = void 0;
const typeorm_1 = require("typeorm");
const code_entity_1 = require("../../code/entities/code.entity");
let Contacts = class Contacts extends typeorm_1.BaseEntity {
};
exports.Contacts = Contacts;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Contacts.prototype, "idContacts", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "ahub_messager", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "ahub_bank", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Contacts.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => code_entity_1.Code),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof code_entity_1.Code !== "undefined" && code_entity_1.Code) === "function" ? _a : Object)
], Contacts.prototype, "id_code", void 0);
exports.Contacts = Contacts = __decorate([
    (0, typeorm_1.Entity)('contacts')
], Contacts);
//# sourceMappingURL=contacts.entity.js.map