import React from 'react';
import { StyledContainer, StyledCustomText } from '../styles/styled';
const HomeScreen = () => {
  return (
    <StyledContainer>
      <StyledCustomText color="green">Primary Text</StyledCustomText>
      <StyledCustomText color="yellow">Secondary Text</StyledCustomText>
    </StyledContainer>
  );
};

export default HomeScreen;
