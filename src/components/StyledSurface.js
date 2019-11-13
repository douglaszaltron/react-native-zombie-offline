import React from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from '../theme/Light';

export default ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.surface,
  },
});
