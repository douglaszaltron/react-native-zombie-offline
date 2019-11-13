import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Spacing, Typography} from '../theme';
import Theme from '../theme/Light';

const StyledListItem = props => {
  const {title, subtitle} = props;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    backgroundColor: Theme.background,
  },
  title: {
    ...Typography.body1,
    color: Theme.highEmphasis,
  },
  subtitle: {
    ...Typography.caption,
    color: Theme.mediumEmphasis,
  },
});

export default StyledListItem;
