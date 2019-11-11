import {createStackNavigator} from 'react-navigation-stack';
import {ZombieIndexScreen, ZombieStoreScreen} from '../screens/Zombies';

const defaultNavigationOptions = {
  headerBackTitle: 'Voltar',
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
