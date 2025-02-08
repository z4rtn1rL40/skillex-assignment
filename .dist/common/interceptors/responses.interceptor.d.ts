import { CallHandler, ExecutionContext, Logger, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ResponsesService } from 'src/responses/responses.service';
export declare class ResponsesInterceptor implements NestInterceptor {
    private responsesService;
    protected readonly logger: Logger;
    constructor(responsesService: ResponsesService);
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
}
