import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
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
