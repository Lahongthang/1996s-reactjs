import { ReactNode } from "react";
import { IconButton, useTheme } from "@mui/material";
import { Rest, Sx } from "../../configs/types";

type Props = {
  sx?: Sx;
  children: ReactNode;
  onClick?: () => void;
} & Rest

const IconButtonAnimate = ({ children, sx, ...props }: Props) => {
  const theme = useTheme();
  return (
    <IconButton
      color="primary"
      sx={{
        width: 40,
        height: 40,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shorter,
        }),
        '&:hover': {
          p: 0.5,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
}

export default IconButtonAnimate;
