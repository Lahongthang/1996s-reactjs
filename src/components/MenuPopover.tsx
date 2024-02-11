import { ReactNode } from "react";
import { Popover } from "@mui/material";
import { ElementNullable, Rest, Sx } from "../configs/types";

type Props = {
  anchorEl: ElementNullable;
  children: ReactNode;
  sx?: Sx;
} & Rest

const MenuPopover = ({ anchorEl, children, sx, ...props }: Props) => {
  return (
    <Popover
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
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
        '& .MuiPaper-root': { p: 1 },
        ...sx
      }}
      {...props}
    >
      {children}
    </Popover>
  )
}

export default MenuPopover;
