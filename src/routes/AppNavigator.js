import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainStack from './MainStack';
import AuthStack from './AuthStack';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainStack,
    Auth: AuthStack,
  }),
);
