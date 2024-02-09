import { ReactNode } from 'react';
import { CardActions, CardContent, CardHeader, Card as MuiCard, Stack, Typography } from '@mui/material';
import Iconify from './Iconify';

type Props = {
  title: string;
  titleIcon?: string;
  actions?: () => ReactNode;
  children: ReactNode;
}

const Card = ({ title, titleIcon, children, actions }: Props) => {
  return (
    <MuiCard sx={{ width: 1 }}>
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
