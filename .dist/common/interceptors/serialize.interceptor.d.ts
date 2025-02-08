import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface ClassContrustor {
    new (...args: any[]): object;
}
export declare class SerializeInterceptor implements NestInterceptor {
    private dto;
    constructor(dto: ClassContrustor);
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any>;
}
