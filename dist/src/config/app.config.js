"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.default = (0, config_1.registerAs)('config', () => ({
    port: parseInt(process.env.PORT, 10) || 5000,
    nodenv: process.env.NODE_ENV,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
}));
//# sourceMappingURL=app.config.js.map