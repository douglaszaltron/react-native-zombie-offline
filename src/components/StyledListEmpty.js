import React from 'react';
import {Avatar, Surface, Title, Subheading} from 'react-native-paper';
import styled from 'styled-components/native';
import Spacing from '../theme/Spacing';
import Colors from '../theme/Colors';

const StyledSurface = styled(Surface)`
  margin: auto;
  align-items: center;
  width: 80%;
`;

const StyledIcon = styled(Avatar.Icon).attrs(props => ({
  color: props.color ? props.color : Colors.black54,
}))`
  margin-bottom: ${Spacing.md};
  background-color: ${Colors.black12};
`;

const StyledTitle = styled(Title)`
  text-align: center;
`;

const StyledDescription = styled(Subheading)`
  margin-bottom: ${Spacing.md};
  text-align: center;
`;

const StyledAction = styled.View`
  margin-bottom: ${Spacing.md};
  text-align: center;
`;

const StyledListEmpty = props => {
  const {icon, title, description, action} = props;

  return (
    <StyledSurface>
      <StyledIcon size={96} icon={icon} />
      <StyledTitle numberOfLines={3}>{title}</StyledTitle>
      {description && (
        <StyledDescription numberOfLines={3}>{description}</StyledDescription>
      )}
      {action && <StyledAction>{action}</StyledAction>}
    </StyledSurface>
  );
};

export default StyledListEmpty;
