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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ResponsesInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsesInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const responses_service_1 = require("../../responses/responses.service");
let ResponsesInterceptor = ResponsesInterceptor_1 = class ResponsesInterceptor {
    constructor(responsesService) {
        this.responsesService = responsesService;
        this.logger = new common_1.Logger(ResponsesInterceptor_1.name);
    }
    intercept(context, next) {
        return next.handle().pipe((0, rxjs_1.tap)((response) => {
            this.responsesService.createResponse(response);
        }));
    }
};
exports.ResponsesInterceptor = ResponsesInterceptor;
exports.ResponsesInterceptor = ResponsesInterceptor = ResponsesInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(responses_service_1.ResponsesService)),
    __metadata("design:paramtypes", [responses_service_1.ResponsesService])
], ResponsesInterceptor);
//# sourceMappingURL=responses.interceptor.js.map