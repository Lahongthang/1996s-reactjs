import { Box } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify';
import { Rest, Sx } from '../configs/types';

type Props = {
  icon: string;
  color?: string;
  sx?: Sx;
} & Rest

const Iconify = ({ icon, sx, color = 'primary.main', ...props }: Props) => {
  return (
    <Box
      component={Icon}
      icon={icon}
      color={color}
      sx={{ width: 20, height: 20, ...sx }}
      {...props}
    />
  )
}

export default Iconify;
