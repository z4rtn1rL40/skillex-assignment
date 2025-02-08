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
var ItemsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsService = void 0;
const common_1 = require("@nestjs/common");
const nest_knexjs_1 = require("nest-knexjs");
const knex_1 = require("knex");
let ItemsService = ItemsService_1 = class ItemsService {
    constructor(knex) {
        this.knex = knex;
        this.ITEMS_TABLE_NAME = 'items';
        this.logger = new common_1.Logger(ItemsService_1.name);
    }
    async batchCreateItems({ items }) {
        this.logger.log(`Creating items ${JSON.stringify(items)}`);
        const trx = await this.knex.transaction();
        try {
            for (const item of items) {
                await trx.raw(`INSERT IGNORE INTO ${this.ITEMS_TABLE_NAME} (designation) VALUES('${item}')`);
            }
            await trx.commit();
            this.logger.log('Items saved successfully');
        }
        catch (err) {
            this.logger.error(err);
        }
    }
};
exports.ItemsService = ItemsService;
exports.ItemsService = ItemsService = ItemsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_knexjs_1.InjectModel)()),
    __metadata("design:paramtypes", [Function])
], ItemsService);
//# sourceMappingURL=items.service.js.map