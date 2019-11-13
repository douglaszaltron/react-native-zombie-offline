import React from 'react';
import {StatusBar} from 'react-native';
import Theme from '../theme/Light';

const StyledStatusBar = props => (
  <StatusBar
    {...props}
    barStyle={Theme.barStyle}
    backgroundColor={Theme.primaryVariant}
  />
);

export default StyledStatusBar;
