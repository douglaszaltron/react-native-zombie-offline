import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
  name: 'zombie_armors',
  columns: [
    {name: 'zombie_id', type: 'number', isIndexed: true},
    {name: 'armor_id', type: 'number', isIndexed: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
