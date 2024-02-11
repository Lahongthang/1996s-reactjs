import { IconButton, InputAdornment, TextFieldProps, Tooltip } from '@mui/material';
import { useToggle } from '../../hooks';
import RHFTextField from './RHFTextField';
import Iconify from '../Iconify';

type Props = {
  name: string;
} & TextFieldProps

const RHFPasswordField = ({ name, ...props }: Props) => {
  const { toggle, onToggle } = useToggle();

  return (
    <RHFTextField
      name={name}
      type={toggle ? 'text' : 'password'}
      InputProps={{
        endAdornment: <InputAdornment position='end'>
          <Tooltip placement='top' title={toggle ? 'Hide' : 'Show'}>
            <IconButton onClick={onToggle}>
              <Iconify icon={toggle ? 'eva:eye-off-fill' : 'eva:eye-fill'} />
            </IconButton>
          </Tooltip>
        </InputAdornment>
      }}
      {...props}
    />
  )
}

export default RHFPasswordField;
