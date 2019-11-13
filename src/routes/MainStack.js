import {createStackNavigator} from 'react-navigation-stack';
import {ZombieIndexScreen, ZombieStoreScreen} from '../screens/Zombies';
import Theme from '../theme/Light';

const defaultNavigationOptions = {
  headerBackTitle: 'Voltar',
  headerTintColor: Theme.onPrimary,
  headerStyle: {
    backgroundColor: Theme.primary,
    borderBottomWidth: 0,
    elevation: 0,
  },
};

export default createStackNavigator(
  {
    ZombieIndexScreen,
    ZombieStoreScreen,
  },
  {
    defaultNavigationOptions,
  },
);
