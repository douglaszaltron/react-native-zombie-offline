import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import AppNavigator from './routes';
import database from './stores/database';

if (__DEV__) {
  import('./config/ReactotronConfig');
}

const App = () => {
  return (
    <DatabaseProvider database={database}>
      <AppNavigator />
    </DatabaseProvider>
  );
};

export default App;
