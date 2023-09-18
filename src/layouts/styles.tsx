import { Box, styled } from '@mui/material';
import { HEADER, NAVBAR } from '../configs/app';

export const RootStyle = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}))

// -----------------------------------------------------------------

type MainStyleProps = {
  isNavVeritical: boolean;
  isDesktop: boolean;
  isNavMini: boolean;
}

export const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'isNavVeritical' && prop !== 'isDesktop' && prop !== 'isNavMini',
})<MainStyleProps>(({ theme, isNavVeritical, isDesktop, isNavMini }) => ({
  flex: 1,
  height: 0,
  width: '100%',
  backgroundColor: theme.palette.background.default,
  paddingLeft: isDesktop
    ? isNavVeritical
      ? NAVBAR.WIDTH + 1
      : isNavMini
        ? NAVBAR.WIDTH_MINI + 1
        : 0
    : 0,
  paddingTop: isDesktop
    ? isNavVeritical || isNavMini
      ? HEADER.DESKTOP_HEIGHT
      : HEADER.DESKTOP_HEIGHT + NAVBAR.HEIGHT
    : HEADER.DESKTOP_HEIGHT,
}))
