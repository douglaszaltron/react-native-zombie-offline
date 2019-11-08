import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import AppNavigator from './routes';
import database from './stores/database';

const App = () => {
  return (
    <DatabaseProvider database={database}>
      <AppNavigator />
    </DatabaseProvider>
  );
};

export default App;
