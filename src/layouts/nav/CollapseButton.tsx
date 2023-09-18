import { useContext } from 'react';
import { IconButton, useTheme } from '@mui/material';
import Iconify from '../../components/Iconify';
import { HEADER } from '../../configs/app';
import { ThemeContext } from '../../components/theme-settings/ThemeContextProvider';

const CollapseButton = () => {
  const theme = useTheme();

  const { themeLayout, onToggleLayout } = useContext(ThemeContext);

  const isNavMini = themeLayout === 'mini';

  return (
    <IconButton
      size='small'
      onClick={onToggleLayout}
      sx={{
        p: 0,
        width: 24,
        height: 24,
        right: -12,
        position: 'absolute',
        zIndex: theme.zIndex.appBar,
        top: HEADER.DESKTOP_HEIGHT / 2,
        border: `1px dashed ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        '&:hover': {
          backgroundColor: theme.palette.background.default,
        }
      }}
    >
      <Iconify
        sx={{ width: 16, height: 16 }}
        icon={isNavMini ? 'iconamoon:arrow-right-2-light' : 'iconamoon:arrow-left-2-light'}
      />
    </IconButton>
  )
}

export default CollapseButton;
