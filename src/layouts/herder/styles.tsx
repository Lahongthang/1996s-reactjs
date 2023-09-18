import { AppBar, styled, Theme } from '@mui/material';
import { HEADER, NAVBAR } from '../../configs/app';
import { Rest } from '../../configs/types';

type Props = {
  theme?: Theme & Rest;
  isNavVertical: boolean;
  isDesktop: boolean;
  isNavMini: boolean;
}

export const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isNavVertical' && prop !== 'isDesktop' && prop !== 'isNavMini',
})<Props>(({ theme, isNavVertical, isDesktop, isNavMini }) => ({
  top: 0,
  width: '100%',
  position: 'fixed',
  boxShadow: 'none',
  zIndex: theme.zIndex.appBar,
  height: HEADER.DESKTOP_HEIGHT,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
  transition: theme.transitions.create(['width', 'height'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  ...(isNavVertical && {
    opacity: 0.9,
    ...(isDesktop && {
      width: `calc(100% - ${NAVBAR.WIDTH + 1}px)`,
    }),
  }),
  ...(isNavMini && {
    opacity: 0.9,
    ...(isDesktop && {
      width: `calc(100% - ${NAVBAR.WIDTH_MINI + 1}px)`,
    }),
  }),
}))
