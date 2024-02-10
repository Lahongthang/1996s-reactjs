import { Theme } from '@mui/material';
import { Rest } from '../../configs/types';

export default function Card(theme: Theme & Rest) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.spacing(2),
          padding: theme.spacing(2),
          boxShadow: theme.customShadows.card,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(0),
          paddingBottom: theme.spacing(2),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0),
          ':last-child': {
            padding: theme.spacing(0),
          },
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0),
          paddingTop: theme.spacing(2),
        },
      },
    },
  }
}
