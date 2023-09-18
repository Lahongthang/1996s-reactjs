import { Theme } from '@mui/material';

export default function Dialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: theme.spacing(2),
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1.5, 0, 1.5),
          fontWeight: theme.typography.fontWeightBold,
          fontSize: '17px',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1.5),
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1, 1.5),
        },
      },
    },
  }
}
