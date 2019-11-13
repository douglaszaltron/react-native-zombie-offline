import React from 'react';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import {Provider as ReduxProvider} from 'react-redux';
import StatusBar from './components/StyledStatusBar';
import database from './database';
import AppNavigator from './routes/AppNavigator';
import NavigationActions from './services/navigation';
import {store} from './stores';

if (__DEV__) {
  import('./config/ReactotronConfig');
}

const App = () => {
  return (
    <DatabaseProvider database={database}>
      <StatusBar />
      <ReduxProvider store={store}>
        <AppNavigator ref={NavigationActions.setTopLevelNavigator} />
      </ReduxProvider>
    </DatabaseProvider>
  );
};

export default App;
