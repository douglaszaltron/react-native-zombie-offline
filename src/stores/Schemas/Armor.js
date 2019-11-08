import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
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
