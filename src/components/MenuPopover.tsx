import { ReactNode } from "react";
import { Popover } from "@mui/material";
import { Rest, Sx } from "../configs/types";

type Props = {
  open: boolean;
  anchorEl: Element;
  children: ReactNode;
  sx?: Sx;
} & Rest

const MenuPopover = ({ open, anchorEl, children, sx, ...props }: Props) => {
  return (
    <Popover
      anchorEl={anchorEl}
      open={Boolean(open)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{
        mt: 0.25,
        '& .MuiPaper-root': { width: 100 },
        ...sx
      }}
      {...props}
    >
      {children}
    </Popover>
  )
}

export default MenuPopover;
