import { useContext } from 'react';
import { NavVerticalRootStyle } from './styles';
import { ThemeContext } from '../../components/theme-settings/ThemeContextProvider';
import CollapseButton from './CollapseButton';
import NavSectionMini from '../../components/nav-section/mini';

const NavMini = () => {
  const { themeLayout } = useContext(ThemeContext);

  const isNavMini = themeLayout === 'mini';

  return (
    <NavVerticalRootStyle isNavMini={isNavMini}>
      <CollapseButton />
      <NavSectionMini />
    </NavVerticalRootStyle>
  )
}

export default NavMini;
