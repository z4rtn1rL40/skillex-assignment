import { CreateCombinationsDto } from './dto';
import { CombinationsService } from './combinations.service';
export declare class CombinationsController {
    private combinations;
    constructor(combinations: CombinationsService);
    createCombinations(dto: CreateCombinationsDto): Promise<import("../common/entities").Combination>;
}
