import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {Armor, Type, Weapon, Zombie} from './Models';
import schema from './schema';

const adapter = new SQLiteAdapter({dbName: 'AppName', schema: schema});

const database = new Database({
  adapter,
  modelClasses: [Armor, Type, Weapon, Zombie],
  actionsEnabled: true,
});

export default database;
