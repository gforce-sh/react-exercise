import styled, { css } from 'styled-components';
import { useState } from 'react';

export const App = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    setCount((curr) => (curr += 1));
  };

  const handleDecrement = () => {
    setCount((curr) => (curr -= 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <PageContainer>
      <Counter>{count}</Counter>
      <ButtonWrapper>
        <ButtonRight onClick={handleDecrement}>😭</ButtonRight>
        <ButtonLeft onClick={handleIncrement}>😄</ButtonLeft>
      </ButtonWrapper>
      <Reset onClick={handleReset}>🔄</Reset>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`;

const commonButtonStyles = css`
  font-size: 48px;
  padding: 15px;
  cursor: pointer;
  user-select: none;

  :active {
    opacity: 0.6;
  }
`;

const Reset = styled.div`
  margin-top: 35px;
  ${commonButtonStyles}
`;

const Counter = styled.div`
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const ButtonLeft = styled.div`
  ${commonButtonStyles};
  border: #282c34 solid 1px;
  border-radius: 0 15px 15px 0;

  :hover {
    background-color: khaki;
  }
`;

const ButtonRight = styled.div`
  ${commonButtonStyles};
  border: #282c34 solid 1px;
  border-right: none;
  border-radius: 15px 0 0 15px;

  :hover {
    background-color: khaki;
  }
`;
