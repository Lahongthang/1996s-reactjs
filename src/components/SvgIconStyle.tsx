import { forwardRef } from "react";
import { Box, useTheme } from '@mui/material';
import { Sx } from "../configs/types";

type Props = {
  src?: string;
  sx?: Sx;
}

const SvgIconStyle = forwardRef<HTMLDivElement, Props>(({ src, sx }, ref) => {
  const theme = useTheme();
  return (
    <Box ref={ref}
      component={'span'}
      sx={{
        width: 1,
        height: 1,
        display: 'inline-block',
        bgcolor: 'currentcolor',
        WebkitMask: `url(${src}) no-repeat center / contain`,
        mask: `url(${src}) no-repeat center / contain`,
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shorter,
        }),
        ...sx,
      }}
    />
  )
})

export default SvgIconStyle;
