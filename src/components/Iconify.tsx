import { Box } from '@mui/material';
import { Icon } from '@iconify/react';
import { Rest } from '../configs/types';

type Props = {
  icon: string;
} & Rest

const Iconify = ({ icon, ...props }: Props) => {
  return (
    <Box component={Icon} icon={icon} {...props} />
  )
}

export default Iconify;
