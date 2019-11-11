import {appSchema, tableSchema} from '@nozbe/watermelondb';

const Armors = tableSchema({
  name: 'armors',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'defense_points', type: 'number', isOptional: true},
    {name: 'durability', type: 'number'},
    {name: 'price', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

const Types = tableSchema({
  name: 'types',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'abilities', type: 'string', isOptional: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

const Weapons = tableSchema({
  name: 'weapons',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'bullets', type: 'string'},
    {name: 'attack_points', type: 'number', isOptional: true},
    {name: 'durability', type: 'number'},
    {name: 'price', type: 'number'},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

const Zombies = tableSchema({
  name: 'zombies',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'hit_points', type: 'number', isOptional: true},
    {name: 'brains_eaten', type: 'number', isOptional: true},
    {name: 'speed', type: 'number'},
    {name: 'turn_date', type: 'number'},
    {name: 'type_id', type: 'number', isIndexed: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

const ZombieArmors = tableSchema({
  name: 'zombie_armors',
  columns: [
    {name: 'zombie_id', type: 'number', isIndexed: true},
    {name: 'armor_id', type: 'number', isIndexed: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

const ZombieWeapons = tableSchema({
  name: 'zombie_weapons',
  columns: [
    {name: 'zombie_id', type: 'number', isIndexed: true},
    {name: 'weapon_id', type: 'number', isIndexed: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});

export default appSchema({
  version: 1,
  tables: [Armors, Types, Weapons, Zombies, ZombieArmors, ZombieWeapons],
});
