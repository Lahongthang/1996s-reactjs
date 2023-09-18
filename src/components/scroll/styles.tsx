import { styled, Box } from '@mui/material';

type Props = {
  scrollable: boolean;
}

export const RootStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'scrollable',
})<Props>(({ theme, scrollable }) => {
  return {
    width: `calc(100% - 60px)`,
    height: '100%',
    display: 'flex',
    overflowX: 'scroll',
    alignItems: 'center',
    flexDirection: 'row',
    textOverflow: 'clip',
    gap: theme.spacing(0.5),
    scrollBehavior: 'smooth',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    ...(!scrollable && {
      justifyContent: 'center',
    }),
  }
})
