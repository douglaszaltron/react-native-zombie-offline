import {Model} from '@nozbe/watermelondb';
import {
  children,
  date,
  field,
  readonly,
  relation,
} from '@nozbe/watermelondb/decorators';

export default class Zombie extends Model {
  static table = 'zombies';

  static associations = {
    type: {type: 'belongs_to', key: 'type_id'},
    armors: {type: 'has_many', foreignKey: 'armor_id'},
    weapons: {type: 'has_many', foreignKey: 'weapon_id'},
  };

  @field('name')
  name;

  @field('hit_points')
  hit_points;

  @field('brains_eaten')
  brains_eaten;

  @field('speed')
  speed;

  @field('turn_date')
  turn_date;

  @relation('types', 'type_id')
  type;

  @children('armors')
  armors;

  @children('weapons')
  weapons;

  @readonly
  @date('created_at')
  createdAt;

  @readonly
  @date('updated_at')
  updatedAt;
}
