import {createStackNavigator} from 'react-navigation-stack';
import {ZombieIndexScreen, ZombieStoreScreen} from '../screens/Zombies';
import {ThemeLight} from '../theme';

const {primary, onPrimary} = ThemeLight;

const defaultNavigationOptions = {
  headerBackTitle: 'Voltar',
  headerTintColor: onPrimary,
  headerStyle: {
    backgroundColor: primary,
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
