"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfig = exports.AppConfig = void 0;
var app_config_1 = require("./app.config");
Object.defineProperty(exports, "AppConfig", { enumerable: true, get: function () { return app_config_1.default; } });
var typeorm_config_1 = require("./typeorm.config");
Object.defineProperty(exports, "DatabaseConfig", { enumerable: true, get: function () { return typeorm_config_1.default; } });
//# sourceMappingURL=index.js.map