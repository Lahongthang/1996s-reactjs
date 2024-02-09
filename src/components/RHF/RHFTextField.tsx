import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import { Rest } from '../../configs/types';

type Props = {
  name: string;
  size?: 'small' | 'medium';
} & Rest

const RHFTextField = ({ name, size = 'small', ...props }: Props) => {
  // @ts-expect-error add check required method
  const { control, onCheckRequired } = useFormContext();

  const isRequired = onCheckRequired?.(name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
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
      )}
    />
  )
}

export default RHFTextField;
