import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CombinationsService {
  protected readonly logger = new Logger(CombinationsService.name);
  constructor() {}
}
