import React from 'react';
import {View, StyleSheet} from 'react-native';
import Theme from '../theme/Light';

const StyledDivider = () => <View style={styles.divider} />;

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Theme.divider,
    marginLeft: 16,
  },
});

export default StyledDivider;
