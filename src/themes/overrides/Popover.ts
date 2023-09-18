import { Theme } from '@mui/material';
import { Rest } from '../../configs/types';

export default function Popover(theme: Theme & Rest) {
  return {
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadows: theme.customShadows.dropdown,
          borderRadius: Number(theme.shape.borderRadius) * 1.5,
          padding: theme.spacing(0.5),
        },
      },
    },
  }
}
