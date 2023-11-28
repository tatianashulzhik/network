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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Activity = void 0;
const typeorm_1 = require("typeorm");
const company_entity_1 = require("../../company/entities/company.entity");
const subscribers_entity_1 = require("../../subscribers/entities/subscribers.entity");
const messages_entity_1 = require("../../messages/entities/messages.entity");
const subscription_entity_1 = require("../../subscription/entities/subscription.entity");
const participants_entity_1 = require("../../participants/entities/participants.entity");
const dissible_participants_entity_1 = require("../../dissible-participants/entities/dissible-participants.entity");
const event_entity_1 = require("../../event/entities/event.entity");
let User_Activity = class User_Activity extends typeorm_1.BaseEntity {
};
exports.User_Activity = User_Activity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], User_Activity.prototype, "idUserActivity", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], User_Activity.prototype, "aboutTheUser", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", String)
], User_Activity.prototype, "interests", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], User_Activity.prototype, "idPossibleParticipants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => company_entity_1.Company, (idCompany) => idCompany.idCompany),
    __metadata("design:type", typeof (_a = typeof company_entity_1.Company !== "undefined" && company_entity_1.Company) === "function" ? _a : Object)
], User_Activity.prototype, "idCompany", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subscribers_entity_1.Subscribers, (idSubscribers) => idSubscribers.idSubscribers),
    __metadata("design:type", typeof (_b = typeof subscribers_entity_1.Subscribers !== "undefined" && subscribers_entity_1.Subscribers) === "function" ? _b : Object)
], User_Activity.prototype, "idSubscribers", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => messages_entity_1.Messages, (idMessages) => idMessages.idMessages),
    __metadata("design:type", typeof (_c = typeof messages_entity_1.Messages !== "undefined" && messages_entity_1.Messages) === "function" ? _c : Object)
], User_Activity.prototype, "idMessages", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => subscription_entity_1.Subscription, (idSubscription) => idSubscription.idSubscription),
    __metadata("design:type", typeof (_d = typeof subscription_entity_1.Subscription !== "undefined" && subscription_entity_1.Subscription) === "function" ? _d : Object)
], User_Activity.prototype, "idSubscription", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, (idParticipants) => idParticipants.idParticipants),
    __metadata("design:type", typeof (_e = typeof participants_entity_1.Participants !== "undefined" && participants_entity_1.Participants) === "function" ? _e : Object)
], User_Activity.prototype, "idParticipants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dissible_participants_entity_1.Dissible_Participants, (idDissibleParticipants) => idDissibleParticipants.idDissibleParticipants),
    __metadata("design:type", typeof (_f = typeof dissible_participants_entity_1.Dissible_Participants !== "undefined" && dissible_participants_entity_1.Dissible_Participants) === "function" ? _f : Object)
], User_Activity.prototype, "idDissibleParticipants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, (idEvent) => idEvent.idEvent),
    __metadata("design:type", typeof (_g = typeof event_entity_1.Event !== "undefined" && event_entity_1.Event) === "function" ? _g : Object)
], User_Activity.prototype, "idEvent", void 0);
exports.User_Activity = User_Activity = __decorate([
    (0, typeorm_1.Entity)('user_activity')
], User_Activity);
//# sourceMappingURL=user-activity.entity.js.map