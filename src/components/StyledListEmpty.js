import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {Spacing} from '../theme';

const Box = styled.View`
  margin: auto;
  align-items: center;
  width: 80%;
`;

const Picture = styled.Image.attrs({resizeMode: 'contain'})`
  margin-vertical: ${Spacing.md};
`;

const Title = styled(Text).attrs({numberOfLines: 2})`
  text-align: center;
`;

const Body = styled(Text).attrs({numberOfLines: 3})`
  margin-bottom: ${Spacing.md};
  font-size: 14;
  text-align: center;
`;

const Help = styled(Text).attrs({numberOfLines: 2})`
  text-align: center;
`;

const StyledListEmpty = props => {
  const {image, title, body, help} = props;

  return (
    <Box>
      {image && <Picture source={image} />}
      <Title>{title}</Title>
      {body && <Body>{body}</Body>}
      {help && <Help>{help}</Help>}
    </Box>
  );
};

export default StyledListEmpty;
