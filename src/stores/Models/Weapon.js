import {Model} from '@nozbe/watermelondb';
import {date, field, readonly} from '@nozbe/watermelondb/decorators';

export default class Weapon extends Model {
  static table = 'weapons';

  @field('name')
  name;

  @field('bullets')
  bullets;

  @field('attack_points')
  attack_points;

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
