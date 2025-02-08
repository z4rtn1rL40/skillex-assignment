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
var ResponsesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsesService = void 0;
const common_1 = require("@nestjs/common");
const knex_1 = require("knex");
const nest_knexjs_1 = require("nest-knexjs");
let ResponsesService = ResponsesService_1 = class ResponsesService {
    constructor(knex) {
        this.knex = knex;
        this.RESPONSES_TABLE_NAME = 'responses';
        this.logger = new common_1.Logger(ResponsesService_1.name);
    }
    async createResponse(response) {
        this.logger.log(`Creating a response`);
        try {
            await this.knex.raw(`
        INSERT INTO ${this.RESPONSES_TABLE_NAME} (response) VALUES(?)
      `, [JSON.stringify(response)]);
        }
        catch (err) {
            this.logger.error(err);
        }
    }
};
exports.ResponsesService = ResponsesService;
exports.ResponsesService = ResponsesService = ResponsesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_knexjs_1.InjectModel)()),
    __metadata("design:paramtypes", [Function])
], ResponsesService);
//# sourceMappingURL=responses.service.js.map