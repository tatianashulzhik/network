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
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const typeorm_1 = require("typeorm");
const dissible_participants_entity_1 = require("../../dissible-participants/entities/dissible-participants.entity");
const participants_entity_1 = require("../../participants/entities/participants.entity");
const complain_entity_1 = require("./complain.entity");
const disscusion_entity_1 = require("./disscusion.entity");
const contacts_event_entity_1 = require("./contacts_event.entity");
let Event = class Event extends typeorm_1.BaseEntity {
};
exports.Event = Event;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        comment: 'The unique identifier',
    }),
    __metadata("design:type", Number)
], Event.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "repeat", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "responsible", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
    }),
    __metadata("design:type", String)
], Event.prototype, "interests", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Event.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], Event.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participants_entity_1.Participants, (idParticipants) => idParticipants.idParticipants),
    __metadata("design:type", typeof (_a = typeof participants_entity_1.Participants !== "undefined" && participants_entity_1.Participants) === "function" ? _a : Object)
], Event.prototype, "idParticipants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dissible_participants_entity_1.Dissible_Participants, (idDissibleParticipants) => idDissibleParticipants.idDissibleParticipants),
    __metadata("design:type", typeof (_b = typeof dissible_participants_entity_1.Dissible_Participants !== "undefined" && dissible_participants_entity_1.Dissible_Participants) === "function" ? _b : Object)
], Event.prototype, "idDissibleParticipants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => complain_entity_1.Complain, (idComplain) => idComplain.idComplain),
    __metadata("design:type", typeof (_c = typeof complain_entity_1.Complain !== "undefined" && complain_entity_1.Complain) === "function" ? _c : Object)
], Event.prototype, "idComplain", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => disscusion_entity_1.Disscusion, (idDisscusion) => idDisscusion.idDisscusion),
    __metadata("design:type", typeof (_d = typeof disscusion_entity_1.Disscusion !== "undefined" && disscusion_entity_1.Disscusion) === "function" ? _d : Object)
], Event.prototype, "idDisscusion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => contacts_event_entity_1.Contacts_Event, (idContactsEvent) => idContactsEvent.idContactsEvent),
    __metadata("design:type", typeof (_e = typeof disscusion_entity_1.Disscusion !== "undefined" && disscusion_entity_1.Disscusion) === "function" ? _e : Object)
], Event.prototype, "idContactsEvent", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('event')
], Event);
//# sourceMappingURL=event.entity.js.map