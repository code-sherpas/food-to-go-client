import palette from './palette';
import shadows from './shadows';
import PropTypes from 'prop-types';
import typography from './typography';
import breakpointsX from './breakpoints';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import componentsOverride from './overrides';
import GlobalStyles from './globalStyles';
import borderRadius from './borderRadius';
import { StyledEngineProvider } from '@material-ui/styled-engine';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

function ThemeConfig({ children }) {
  const isLight = useSelector(state => !state.theme.darkMode);

  const themeOptions = {
    palette: palette[isLight ? 'light' : 'dark'],
    shadows: shadows[isLight ? 'light' : 'dark'],
    typography: typography,
    shape: borderRadius,
    breakpoints: breakpointsX,

    components: componentsOverride({
      theme: {
        palette: palette[isLight ? 'light' : 'dark'],
        shadows: shadows[isLight ? 'light' : 'dark'],
        typography: typography,
        shape: borderRadius
      }
    })
  };

  if (!isLight) themeOptions.palette.mode = 'dark';

  const theme = useMemo(() => createMuiTheme(themeOptions), [themeOptions]);

  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default ThemeConfig;
