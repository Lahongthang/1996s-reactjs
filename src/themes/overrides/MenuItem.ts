import { Theme } from '@mui/material';

export default function MenuItem(theme: Theme) {
  return {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(1),
          padding: theme.spacing(0.5, 1),
        },
      },
    },
  }
}
