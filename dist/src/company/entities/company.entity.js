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
exports.Company = void 0;
const typeorm_1 = require("typeorm");
const company_address_entity_1 = require("./company-address.entity");
const contacts_company_entity_1 = require("./contacts-company.entity");
let Company = class Company extends typeorm_1.BaseEntity {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Company.prototype, "idCompany", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Company.prototype, "employees", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "researchers", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "patens", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "certificates", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "descriptions", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "interests", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "cover", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Company.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_address_entity_1.Company_Address, (idCompanyAddress) => idCompanyAddress.idCompanyAddress),
    __metadata("design:type", Company)
], Company.prototype, "idCompanyAddress", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contacts_company_entity_1.Contacts_Company, (idContactsCompany) => idContactsCompany.idContactsCompany),
    __metadata("design:type", typeof (_a = typeof contacts_company_entity_1.Contacts_Company !== "undefined" && contacts_company_entity_1.Contacts_Company) === "function" ? _a : Object)
], Company.prototype, "idContactsCompany", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)('company')
], Company);
//# sourceMappingURL=company.entity.js.map