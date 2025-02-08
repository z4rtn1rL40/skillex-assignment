"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinationsModule = void 0;
const common_1 = require("@nestjs/common");
const combinations_service_1 = require("./combinations.service");
const combinations_controller_1 = require("./combinations.controller");
const items_module_1 = require("../items/items.module");
const items_service_1 = require("../items/items.service");
const responses_service_1 = require("../responses/responses.service");
let CombinationsModule = class CombinationsModule {
};
exports.CombinationsModule = CombinationsModule;
exports.CombinationsModule = CombinationsModule = __decorate([
    (0, common_1.Module)({
        imports: [items_module_1.ItemsModule],
        providers: [combinations_service_1.CombinationsService, items_service_1.ItemsService, responses_service_1.ResponsesService],
        controllers: [combinations_controller_1.CombinationsController],
        exports: [combinations_service_1.CombinationsService],
    })
], CombinationsModule);
//# sourceMappingURL=combinations.module.js.map