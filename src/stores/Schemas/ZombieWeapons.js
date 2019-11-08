import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
  name: 'zombie_weapons',
  columns: [
    {name: 'zombie_id', type: 'number', isIndexed: true},
    {name: 'weapon_id', type: 'number', isIndexed: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
