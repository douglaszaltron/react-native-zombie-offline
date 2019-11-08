import {createStackNavigator} from 'react-navigation-stack';

import {
  ForgotPasswordScreen,
  SignInScreen,
  SignUpScreen,
} from '../screens/Auth';

const defaultNavigationOptions = {
  headerBackTitle: 'Voltar',
};

export default createStackNavigator(
  {
    SignInScreen,
    SignUpScreen,
    ForgotPasswordScreen,
  },
  {
    defaultNavigationOptions,
  },
);
