import React from 'react';
import {Button} from 'react-native';
import Theme from '../theme/Light';

const StyledButton = ({title, color, ...rest}) => (
  <Button {...rest} color={color} title={title} />
);

StyledButton.defaultProps = {
  color: Theme.primary,
};

export default StyledButton;
