import { Theme } from '@mui/material';

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          padding: theme.spacing(0, 1),
          '& .MuiAutocomplete-option': {
            padding: theme.spacing(1),
            margin: theme.spacing(1, 0),
            borderRadius: theme.spacing(1),
          },
        },
      },
    },
  }
}
