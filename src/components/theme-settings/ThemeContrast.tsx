import { ReactNode, useContext, useMemo } from 'react';
import { ThemeProvider, useTheme, createTheme, ThemeOptions } from '@mui/material/styles';
import { merge } from 'lodash';
import { ThemeContext } from './ThemeContextProvider';

type Props = {
  children: ReactNode;
}

const ThemeContrast = ({ children }: Props) => {
  const outerTheme: ThemeOptions & { customShadows: any } = useTheme();
  const { themeContrast, themeMode } = useContext(ThemeContext);

  const isLight = themeMode === 'light';
  const isContrastBold = themeContrast === 'bold';

  const themeOptions: ThemeOptions = useMemo(() => ({
    palette: {
      background: {
        ...(isContrastBold && {
          default: isLight ? outerTheme?.palette?.grey?.[100] : outerTheme?.palette?.grey?.[900],
        }),
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          ...(isContrastBold && {
            root: {
              boxShadow: outerTheme.customShadows.z4,
            },
          }),
        },
      },
    },
  }), [isLight, isContrastBold, outerTheme])

  const theme = createTheme(merge(outerTheme, themeOptions));

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeContrast;
