import React from 'react';
import styled from '@emotion/styled';
import { Route, Routes } from 'react-router';
import ThemeProvider from './theme/ThemeProvider';

/* Pages */
import DashboardNavigator from '../features/DashboardNavigator';
import LoginForm from '../features/LoginForm';
import BrowseStocks from '../features/BrowseStocks';

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

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <Routes>
          <Route path="/" element={<DashboardNavigator />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/browse-stocks" element={<BrowseStocks />} />
        </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
