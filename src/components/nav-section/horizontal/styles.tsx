import { styled, ListItemButton, ListItemIcon, Popover, alpha } from '@mui/material';

type ListItemStyleProps = {
  active: boolean;
  open: boolean;
}

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})<ListItemStyleProps>(({ theme, active, open }) => {
  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  }

  const hoverStyle = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  }

  return {
    height: '32px',
    flexGrow: 'unset',
    flexShrink: 0,
    padding: theme.spacing(0, 1),
    borderRadius: theme.spacing(1),
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    '&:hover': hoverStyle,
    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': { ...activeStyle },
    }),
    // Open
    ...(open && !active && hoverStyle),
  }
})

// -----------------------------------------------------------------------------

type ListItemIconStyleProps = {
  active: boolean;
}

export const ListItemIconStyle = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== 'active',
})<ListItemIconStyleProps>(({ theme, active }) => ({
  minWidth: 0,
  ...(active && {
    color: theme.palette.primary.main,
  }),
}))

// -----------------------------------------------------------------------------

export const PaperStyle = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    width: 160,
    pointerEvents: 'auto',
    padding: theme.spacing(1),
  },
}))
