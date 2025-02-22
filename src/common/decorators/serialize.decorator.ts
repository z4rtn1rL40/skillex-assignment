import { UseInterceptors } from '@nestjs/common';
import {
  ClassContrustor,
  SerializeInterceptor,
} from 'src/common/interceptors/serialize.interceptor';

export function Serialize(dto: ClassContrustor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}
