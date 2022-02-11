import React from 'react';
import styled from '@emotion/styled';
import ThemeProvider from './theme/ThemeProvider';
import DashboardNavigator from '../features/DashboardNavigator';

/* Style Me */
const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HeadingText = styled.h1`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  margin-top: 100px;
  font-size: 50px;
`;

function App() {
  const MOCKED_TEXT = 'GunJS Stock Exchange';

  return (
    <ThemeProvider>
      <AppContainer>
        {/* <HeadingText>{MOCKED_TEXT}</HeadingText> */}
        <DashboardNavigator />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
