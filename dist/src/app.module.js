"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const config_2 = require("./config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./user/auth/auth.module");
const main_profile_module_1 = require("./user/main-profile/main-profile.module");
const contacts_controller_1 = require("./user/contacts/contacts.controller");
const contacts_module_1 = require("./user/contacts/contacts.module");
const favorites_module_1 = require("./favorites/favorites.module");
const complain_controller_1 = require("./event/complain/complain.controller");
const complain_module_1 = require("./event/complain/complain.module");
const subscribers_module_1 = require("./subscribers/subscribers.module");
const casl_module_1 = require("./casl/casl.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [config_2.AppConfig, config_2.DatabaseConfig],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    ...configService.get('database'),
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            main_profile_module_1.MainModule,
            contacts_module_1.ContactModule,
            favorites_module_1.FavoritesModule,
            complain_module_1.ComplainModule,
            subscribers_module_1.SubscribersModule,
            casl_module_1.CaslModule,
        ],
        controllers: [contacts_controller_1.ContactsController, complain_controller_1.ComplainController],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map