import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { ResponsesService } from 'src/responses/responses.service';

@Injectable()
export class ResponsesInterceptor implements NestInterceptor {
  protected readonly logger = new Logger(ResponsesInterceptor.name);
  constructor(
    @Inject(ResponsesService) private responsesService: ResponsesService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((response) => {
        this.responsesService.createResponse(response);
      }),
    );
  }
}
