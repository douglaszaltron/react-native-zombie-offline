import {appSchema, Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import ArmorModel from './Models/Armor';
import ArmorSchema from './Schemas/Armor';

const schema = appSchema({
  version: 1,
  tables: [ArmorSchema],
});

const adapter = new SQLiteAdapter({dbName: 'AppName', schema});

const database = new Database({
  adapter,
  modelClasses: [ArmorModel],
  actionsEnabled: true,
});

export default database;
