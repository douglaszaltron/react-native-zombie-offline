import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Theme from '../theme/Light';
import {Typography, Spacing} from '../theme';

const StyledHeaderButton = ({title, ...rest}) => (
  <TouchableOpacity {...rest}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    ...Typography.button,
    paddingHorizontal: Spacing.md,
    color: Theme.onPrimary,
  },
});

export default StyledHeaderButton;
