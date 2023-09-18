import { Theme } from '@mui/material';

export default function DatePicker(theme: Theme) {
  return {
    MuiDatePicker: {
      defaultProps: {
        inputFormat: 'dd/MM/yyyy',
      },
    },
    MuiCalendarPicker: {
      styleOverrides: {
        viewTransitionContainer: {
          '& .PrivatePickersSlideTransition-root': {
            minHeight: "200px",
          },
        },
      },
    },
  }
}
