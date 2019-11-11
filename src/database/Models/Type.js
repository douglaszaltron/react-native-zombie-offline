import {Model} from '@nozbe/watermelondb';
import {date, field, readonly} from '@nozbe/watermelondb/decorators';

export default class Type extends Model {
  static table = 'types';

  @field('name')
  name;

  @field('abilities')
  abilities;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
