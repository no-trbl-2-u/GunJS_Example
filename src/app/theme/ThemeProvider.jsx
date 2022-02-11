import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './theme';

const ThemeProvider = props => <EmotionThemeProvider theme={theme} {...props} />;

export default ThemeProvider;
