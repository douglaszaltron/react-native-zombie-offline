import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Spacing, Typography} from '../theme';
import Theme from '../theme/Light';

const StyledTextInput = props => {
  const {labelText, error, value, refFocus, ...rest} = props;

  return (
    <>
      <View style={[styles.textInput, styles.textInputError]}>
        {labelText && value && <Text style={styles.label}>{labelText}</Text>}
        <TextInput
          {...rest}
          ref={refFocus}
          style={styles.input}
          placeholderTextColor={Theme.mediumEmphasis}
          selectionColor={Theme.primary}
          value={value}
        />
      </View>
      <View>{error && <Text style={styles.error}>{error}</Text>}</View>
    </>
  );
};

const borderWidth = StyleSheet.hairlineWidth * 3;

const styles = StyleSheet.create({
  label: {
    ...Typography.overline,
    position: 'absolute',
    left: Spacing.sm,
    top: -Spacing.sm,
    paddingHorizontal: Spacing.xs,
    backgroundColor: Theme.surface,
    color: Theme.mediumEmphasis,
  },
  error: {
    ...Typography.overline,
    paddingHorizontal: Spacing.sm + borderWidth,
    color: Theme.error,
  },
  textInputError: {
    borderColor: Theme.mediumEmphasis,
  },
  textInput: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm,
    borderRadius: 2,
    borderWidth: borderWidth,
    borderColor: Theme.mediumEmphasis,
  },
  input: {
    padding: 0,
    color: Theme.highEmphasis,
  },
});

export default StyledTextInput;
