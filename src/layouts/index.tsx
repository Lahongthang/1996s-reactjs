import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../components/theme-settings/ThemeContextProvider';
import { useResponsive, useToggle } from '../hooks';
import Header from './herder';
import { NavHorizontal, NavVertical } from './nav';
import { MainStyle, RootStyle } from './styles';
import NavMini from './nav/NavMini';

const ApplicationLayout = () => {
  const { themeLayout } = useContext(ThemeContext);
  const isNavVeritical = themeLayout === 'vertical';
  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive({ query: 'up', key: 'lg' });

  const { toggle: navOpen, onOpen: onOpenNav, onClose: onCloseNav } = useToggle();

  return (
    <RootStyle>
      <Header onOpenNav={onOpenNav} />
      {
        isDesktop
          ? isNavVeritical
            ? <NavVertical />
            : isNavMini
              ? <NavMini />
              : <NavHorizontal />
          : <NavVertical open={navOpen} onCloseNav={onCloseNav} />
      }
      <MainStyle
        isDesktop={isDesktop}
        isNavMini={isNavMini}
        isNavVeritical={isNavVeritical}>
        <Outlet />
      </MainStyle>
    </RootStyle>
  )
}

export default ApplicationLayout;
