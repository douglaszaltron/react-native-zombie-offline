import {tableSchema} from '@nozbe/watermelondb';

export default tableSchema({
  name: 'types',
  columns: [
    {name: 'name', type: 'string'},
    {name: 'abilities', type: 'string', isOptional: true},
    {name: 'created_at', type: 'number'},
    {name: 'updated_at', type: 'number'},
  ],
});
