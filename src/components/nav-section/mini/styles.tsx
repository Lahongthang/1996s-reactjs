import { ListItemButton, ListItemIcon, Popover, alpha, styled } from "@mui/material";

type ListItemStyleProps = {
  active: boolean;
  open: boolean;
  depth: number;
}

export const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'depth',
})<ListItemStyleProps>(({ theme, active, open, depth }) => {
  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
  };

  const hoverStyle = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  };

  return {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(0.5, 1),
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
    ...(depth > 1 && {
      flexDirection: 'row',
    })
  }
})

// ---------------------------------------------------------------

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

// ---------------------------------------------------------------

export const PaperStyle = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    pointerEvents: 'auto',
    padding: theme.spacing(1),
  },
}))
