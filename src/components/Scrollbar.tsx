import { ReactNode, forwardRef } from "react";
import { styled, alpha } from '@mui/material';
import SimpleBarReact from 'simplebar-react';
import { Rest } from "../configs/types";

const RootStyle = styled('div')(() => ({
  flexGrow: 1,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
}))

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[600], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}))

export function getDeviceType() {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  return { isMobile }
}

const mobileStyles = {
  '& .simplebar-track.simplebar-vertical': {
    width: 0,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 0,
  },
}

type Props = {
  children: ReactNode;
  sx?: any;
} & Rest

const Scrollbar = forwardRef(({ children, sx, ...props }: Props, ref) => {
  const { isMobile } = getDeviceType();

  return (
    <RootStyle>
      <SimpleBarStyle timeout={500} clickOnTrack={false}
        scrollableNodeProps={{ ref: ref }}
        sx={{ ...isMobile && mobileStyles, ...sx }}
        {...props}
      >
        {children}
      </SimpleBarStyle>
    </RootStyle>
  )
})

export default Scrollbar;
