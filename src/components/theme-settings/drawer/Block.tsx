import { Stack, Tooltip, Typography } from '@mui/material';
import Iconify from '../../Iconify';
import { ReactNode } from 'react';
import { Rest, Sx } from '../../../configs/types';

const SPACING = 2.5;

type Props = {
  title: string;
  tooltip?: boolean;
  children: ReactNode;
  sx?: Sx;
} & Rest

const Block = ({ title, tooltip, children, sx, ...props }: Props) => {
  return (
    <Stack spacing={1.5} sx={{ mb: SPACING, ...sx }} {...props}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          color: 'text.secondary',
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 'fontWeightMedium' }}>
          {title}
        </Typography>

        {tooltip && (
          <Tooltip title={tooltip}>
            <Iconify icon="eva:info-outline" width={16} sx={{ mx: 0.5 }} />
          </Tooltip>
        )}
      </Stack>

      {children}
    </Stack>
  )
}

export default Block;
