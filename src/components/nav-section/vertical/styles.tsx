import { styled, ListItemButton, ListItemIcon, alpha } from '@mui/material';

type ListItemStyleProps = {
  active: boolean;
  depth: number;
}

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'depth',
})<ListItemStyleProps>(({ theme, active, depth }) => {
  const activeStyle = {
    color: theme.palette.primary.main,
    ...(depth === 1 && {
      backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    })
  }

  return {
    height: '44px',
    textTransform: 'capitalize',
    borderRadius: theme.spacing(1),
    color: theme.palette.text.secondary,
    ...(active && {
      ...activeStyle
    })
  }
})

// -----------------------------------------------------------------------------

type ListItemIconStyleProps = {
  active: boolean;
}

export const ListItemIconStyle = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemIconStyleProps>(({ theme, active }) => ({
  minWidth: '32px',
  ...(active && {
    color: theme.palette.primary.main,
  }),
}))
