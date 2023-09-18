import { memo } from 'react';
import { Box, IconButton, useTheme, alpha } from '@mui/material';
import Iconify from '../Iconify';

const SIZE = 28;

type Props = {
  direction: 'left' | 'right';
  onClick: () => void;
}

const ArrowButton = ({ direction, onClick }: Props) => {
  const theme = useTheme();

  const styles = {
    width: SIZE,
    height: SIZE,
    borderRadius: '50%',
    position: 'absolute',
    zIndex: theme.zIndex.appBar + 2,
    top: `calc((100% - ${SIZE}px) / 2)`,
    ...(direction === 'left' && {
      left: SIZE / 2,
    }),
    ...(direction === 'right' && {
      right: SIZE / 2,
    }),
  };

  return (
    <>
      <IconButton
        size='small'
        onClick={onClick}
        sx={{
          ...styles,
          background: alpha(theme.palette.primary.light, 0.48),
          '&:hover': {
            background: alpha(theme.palette.primary.main, 0.48)
          },
        }}
      >
        <Iconify
          sx={{
            color: 'primary.main',
            ...(direction === 'left' && {
              transform: 'rotate(180deg)',
            })
          }}
          icon='material-symbols:double-arrow'
        />
      </IconButton>
      <Box sx={{
        ...styles,
        zIndex: theme.zIndex.appBar + 1,
        background: theme.palette.background.default,
      }} />
    </>
  )
}

export default memo(ArrowButton);
