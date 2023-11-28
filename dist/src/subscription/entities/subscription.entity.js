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
exports.Subscription = void 0;
const typeorm_1 = require("typeorm");
let Subscription = class Subscription extends typeorm_1.BaseEntity {
};
exports.Subscription = Subscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Subscription.prototype, "idSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Subscription.prototype, "subscription", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Subscription.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Subscription.prototype, "updatedAt", void 0);
exports.Subscription = Subscription = __decorate([
    (0, typeorm_1.Entity)('subscription')
], Subscription);
//# sourceMappingURL=subscription.entity.js.map