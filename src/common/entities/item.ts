import { DbEntity } from './db-entity';

export class Item extends DbEntity {
  id: string;
  position: number;
  designation: string;
}
