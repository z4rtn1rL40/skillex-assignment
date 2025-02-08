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
var CombinationsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinationsService = void 0;
const common_1 = require("@nestjs/common");
const items_service_1 = require("../items/items.service");
const nest_knexjs_1 = require("nest-knexjs");
const knex_1 = require("knex");
const uuid_1 = require("uuid");
let CombinationsService = CombinationsService_1 = class CombinationsService {
    constructor(knex, itemsService) {
        this.knex = knex;
        this.itemsService = itemsService;
        this.COMBINATIONS_TABLE_NAME = 'combinations';
        this.LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        this.logger = new common_1.Logger(CombinationsService_1.name);
    }
    async createCombinations(dto) {
        this.logger.log(`Creating combinations ${JSON.stringify(dto)}`);
        const designations = await this.createDesignations(dto.input);
        const combinations = this.generateCombinations(designations, dto.length);
        return this.createCombination(combinations);
    }
    async findCombinationByCombinationJSONString(jsonString) {
        const [[existingCombination]] = await this.knex.raw(`
        SELECT id, combinations as combinations from ${this.COMBINATIONS_TABLE_NAME} WHERE combinations = ?
      `, [jsonString]);
        return existingCombination;
    }
    async findCombinationById(id) {
        this.logger.log(`Getting combination by id ${id}`);
        const [[queryResult]] = await this.knex.raw(`SELECT * FROM ${this.COMBINATIONS_TABLE_NAME} WHERE id='${id}'`);
        return queryResult;
    }
    async createCombination(combination) {
        const combinationString = JSON.stringify(combination);
        try {
            const trx = await this.knex.transaction();
            const id = (0, uuid_1.v4)();
            await trx.raw(` INSERT INTO combinations (id, combinations)
          VALUES (?, ?);
        `, [id, combinationString]);
            await trx.commit();
            return this.findCombinationById(id);
        }
        catch (err) {
            this.logger.error(err);
            throw new common_1.ConflictException('Failed to create combinations');
        }
    }
    async createDesignations(input) {
        const designations = input.flatMap((occurrences, index) => {
            const result = [];
            const letter = this.LETTERS[index];
            for (let i = 0; i < occurrences; i++) {
                result.push(`${letter}${i}`);
            }
            return result;
        });
        await this.itemsService.batchCreateItems({ items: designations });
        return designations;
    }
    generateCombinations(items, length) {
        const result = [];
        const backtrack = (path, used) => {
            if (path.length === length) {
                result.push([...path]);
                return;
            }
            for (let i = 0; i < items.length; i++) {
                const isDesignationUsed = used.has(i);
                if (isDesignationUsed) {
                    continue;
                }
                const previosDesignation = path[path.length - 1]?.[0];
                const currentDesignation = items[i];
                if (path.length > 0 &&
                    previosDesignation[0] === currentDesignation[0]) {
                    continue;
                }
                used.add(i);
                path.push(items[i]);
                backtrack(path, used);
                path.pop();
                used.delete(i);
            }
        };
        backtrack([], new Set());
        return result;
    }
};
exports.CombinationsService = CombinationsService;
exports.CombinationsService = CombinationsService = CombinationsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nest_knexjs_1.InjectModel)()),
    __metadata("design:paramtypes", [Function, items_service_1.ItemsService])
], CombinationsService);
//# sourceMappingURL=combinations.service.js.map