import React, { useEffect } from 'react';
import { Drawer } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { NavSectionVertical } from '../../components/nav-section';
import { useResponsive } from '../../hooks';
import { NAVBAR } from '../../configs/app';
import { NavVerticalRootStyle } from './styles';
import CollapseButton from './CollapseButton';

type Props = {
  open?: boolean;
  onCloseNav?: () => void;
}

const NavVertical: React.FC<Props> = ({ onCloseNav, open = false }) => {
  const { pathname } = useLocation();

  const isDesktop = useResponsive({ query: 'up', key: 'lg' });

  useEffect(() => {
    if (open) onCloseNav?.();
  }, [pathname])

  return (
    <>
      {isDesktop ? (
        <NavVerticalRootStyle>
          <CollapseButton />
          <NavSectionVertical />
        </NavVerticalRootStyle>
      ) : (
        <Drawer open={open}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAVBAR.WIDTH,
            },
          }}
        >
          <NavSectionVertical />
        </Drawer>
      )}
    </>
  )
}

export default NavVertical;
