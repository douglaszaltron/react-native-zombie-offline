import {Model} from '@nozbe/watermelondb';
import {date, field, readonly} from '@nozbe/watermelondb/decorators';

export default class Armor extends Model {
  static table = 'armors';

  @field('name')
  name;

  @field('defense_points')
  defense_points;

  @field('durability')
  durability;

  @field('price')
  price;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
