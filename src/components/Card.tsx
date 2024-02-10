import { ReactNode } from 'react';
import { CardActions, CardContent, CardHeader, Card as MuiCard, Stack, SxProps, Typography } from '@mui/material';
import Iconify from './Iconify';

type Props = {
  title: string;
  titleIcon?: string;
  sx?: SxProps;
  actions?: () => ReactNode;
  children: ReactNode;
}

const Card = ({ title, titleIcon, sx, children, actions }: Props) => {
  return (
    <MuiCard sx={{ width: 1, ...sx }}>
      <Stack spacing={1} direction='row' sx={{ pb: 2, alignItems: 'center', justifyContent: 'center' }}>
        {titleIcon && <Iconify icon={titleIcon} />}
        <Typography variant='h6'>{title}</Typography>
      </Stack>
      <CardContent>
        {children}
      </CardContent>
      {actions && <CardActions>
        {actions()}
      </CardActions>}
    </MuiCard>
  )
}

export default Card;
