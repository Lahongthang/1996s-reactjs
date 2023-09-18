import React, { ReactNode, useMemo, useContext } from "react";
import { createTheme, StyledEngineProvider, ThemeProvider as MuiThemeProvider, ThemeOptions, CssBaseline } from '@mui/material';
import GlobalStyles from "./globalStyles";
import ComponentsOverrides from "./overrides";
import typography from "./typography";
import { ThemeContext } from "../components/theme-settings/ThemeContextProvider";
import palette from "./palette";
import shadows from "./shadows";
import customShadows from "./customShadows";

type Props = {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useContext(ThemeContext);

  const themeOptions: ThemeOptions = useMemo(() => ({
    palette: palette(themeMode),
    typography: typography,
    shape: { borderRadius: 8 },
    shadows: shadows(themeMode),
    customShadows: customShadows(themeMode),
  }), [themeMode])

  const theme = createTheme(themeOptions);

  theme.components = ComponentsOverrides(theme);

  return <StyledEngineProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MuiThemeProvider>
  </StyledEngineProvider>
}

export default ThemeProvider;
