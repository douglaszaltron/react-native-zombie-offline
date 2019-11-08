import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
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
