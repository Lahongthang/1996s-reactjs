import { Controller, useFormContext } from 'react-hook-form';
import { Stack, TextField, TextFieldProps, Typography } from '@mui/material';

type Props = {
  name: string;
  description?: string;
} & TextFieldProps

const RHFTextField = ({ name, description, size = 'small', ...props }: Props) => {
  // @ts-expect-error add check required method
  const { control, onCheckRequired } = useFormContext();

  const isRequired = onCheckRequired?.(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack spacing={0.5}>
          {description && <Typography variant='caption' color={'text.secondary'}>
            {description}
          </Typography>}
          <TextField
            {...field}
            fullWidth
            size={size}
            required={isRequired}
            value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error}
            helperText={error?.message}
            {...props}
          />
        </Stack>
      )}
    />
  )
}

export default RHFTextField;
