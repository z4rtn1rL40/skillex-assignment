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
const config_2 = require("./common/config");
const nest_knexjs_1 = require("nest-knexjs");
const combinations_controller_1 = require("./combinations/combinations.controller");
const combinations_service_1 = require("./combinations/combinations.service");
const combinations_module_1 = require("./combinations/combinations.module");
const items_service_1 = require("./items/items.service");
const items_module_1 = require("./items/items.module");
const responses_module_1 = require("./responses/responses.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        providers: [combinations_service_1.CombinationsService, items_service_1.ItemsService],
        controllers: [combinations_controller_1.CombinationsController],
        imports: [
            config_1.ConfigModule.forRoot(config_2.ConfigModuleConfig),
            nest_knexjs_1.KnexModule.forRootAsync(config_2.KnexModuleConfig),
            combinations_module_1.CombinationsModule,
            items_module_1.ItemsModule,
            responses_module_1.ResponsesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map