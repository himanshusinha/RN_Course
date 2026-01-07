import { StyledContainer, StyledCustomText } from './styled';

const StyledComponent = () => {
  return (
    <StyledContainer>
      <StyledCustomText color="green">Primary Text</StyledCustomText>
      <StyledCustomText color="yellow">Secondary Text</StyledCustomText>
    </StyledContainer>
  );
};

export default StyledComponent;
