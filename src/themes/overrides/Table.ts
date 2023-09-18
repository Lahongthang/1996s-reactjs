import { Theme, alpha } from '@mui/material';

export default function Table(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
        },
        head: {
          backgroundColor: alpha(theme.palette.primary.light, 0.1),
        },
      },
    },
  }
}
