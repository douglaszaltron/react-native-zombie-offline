import React from 'react';
import {ActivityIndicator, Platform} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from '../theme';
import Theme from '../theme/Light';

const Loading = Platform.select({
  ios: () => <ActivityIndicator />,
  android: () => <ActivityIndicator size={'large'} color={Theme.primary} />,
});

const Container = styled.View`
  margin-vertical: ${props => (props.inset ? Spacing.md : 0)};
  margin-horizontal: ${props => (props.inset ? Spacing.md : 0)};
`;

const StyledLoading = ({inset}) => (
  <Container inset={inset}>
    <Loading />
  </Container>
);

StyledLoading.defaultProps = {
  inset: true,
};

export default StyledLoading;
