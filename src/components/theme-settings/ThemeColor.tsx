import { ReactNode, useContext, useMemo } from 'react';
import { merge } from 'lodash';
import { alpha, ThemeProvider, createTheme, useTheme, ThemeOptions } from '@mui/material/styles';
import { ThemeContext } from './ThemeContextProvider';

type Props = {
  children: ReactNode;
}

const ThemeColor = ({ children }: Props) => {
  const outerTheme = useTheme();
  const { presetColor } = useContext(ThemeContext);

  const themeOptions: ThemeOptions = useMemo(() => ({
    palette: {
      primary: presetColor,
    },
    customShadows: {
      primary: `0 8px 16px 0 ${alpha(presetColor.main, 0.24)}`,
    },
  }), [presetColor]);

  const theme = createTheme(merge(outerTheme, themeOptions));

  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
}

export default ThemeColor;