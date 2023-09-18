import { styled, alpha, Theme } from '@mui/material';
import { HEADER, NAVBAR } from '../../configs/app';
import { Rest } from '../../configs/types';

type NavVerticalRootStyleProps = {
  isNavMini?: boolean;
}

export const NavVerticalRootStyle = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'isNavMini',
})<NavVerticalRootStyleProps>(({ theme, isNavMini = false }) => ({
  height: '100%',
  position: 'fixed',
  boxShadow: 'none',
  width: NAVBAR.WIDTH,
  zIndex: theme.zIndex.appBar,
  backgroundColor: theme.palette.background.default,
  borderRight: `1px dashed ${theme.palette.divider}`,
  transition: theme.transitions.create(['width', 'height'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  ...(isNavMini && {
    width: NAVBAR.WIDTH_MINI,
  })
}))

// ---------------------------------------------------------------

type NavHorizontalRootStyleProps = {
  theme?: Theme & Rest;
}

export const NavHorizontalRootStyle = styled('nav', {
  shouldForwardProp: (prop) => prop !== 'something'
})<NavHorizontalRootStyleProps>(({ theme }) => ({
  position: 'fixed',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: NAVBAR.HEIGHT,
  top: HEADER.DESKTOP_HEIGHT,
  borderTop: `1px dashed ${theme.palette.divider}`,
  boxShadow: theme.customShadows.z8,
  backgroundColor: alpha(theme.palette.background.default, 0.9),
  transition: theme.transitions.create(['width', 'height'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
}))
