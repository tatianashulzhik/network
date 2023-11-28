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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscribers = void 0;
const typeorm_1 = require("typeorm");
let Subscribers = class Subscribers extends typeorm_1.BaseEntity {
};
exports.Subscribers = Subscribers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Subscribers.prototype, "idSubscribers", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Subscribers.prototype, "subscribers", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Subscribers.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Subscribers.prototype, "updatedAt", void 0);
exports.Subscribers = Subscribers = __decorate([
    (0, typeorm_1.Entity)('subscribers')
], Subscribers);
//# sourceMappingURL=subscribers.entity.js.map