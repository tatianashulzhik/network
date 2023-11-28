"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const complain_entity_1 = require("./entities/complain.entity");
const contacts_event_entity_1 = require("./entities/contacts_event.entity");
const disscusion_entity_1 = require("./entities/disscusion.entity");
const event_entity_1 = require("./entities/event.entity");
let EventModule = class EventModule {
};
exports.EventModule = EventModule;
exports.EventModule = EventModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([complain_entity_1.Complain, contacts_event_entity_1.Contacts_Event, disscusion_entity_1.Disscusion, event_entity_1.Event])],
    })
], EventModule);
//# sourceMappingURL=event.module.js.map