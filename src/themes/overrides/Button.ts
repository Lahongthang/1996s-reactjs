import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          textTransform: 'capitalize',
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  }
}
