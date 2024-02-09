import { useContext } from 'react';
import { Stack, Toolbar } from '@mui/material';
import SvgIconStyle from '../../components/SvgIconStyle';
import Rotating from '../../components/animate/variants/Rotating';
import { ThemeContext } from '../../components/theme-settings/ThemeContextProvider';
import { useResponsive } from '../../hooks';
import { RootStyle } from './styles';
import IconButtonAnimate from '../../components/animate/IconButtonAnimate';
import Logo from '../../components/Logo';
import AccountPopover from '../../components/AccountPopover';

type Props = {
  onOpenNav?: () => void;
}

const Header = ({ onOpenNav }: Props) => {
  const { onOpen: onOpenLayoutSetting, themeLayout } = useContext(ThemeContext);
  const isNavVertical = themeLayout === 'vertical';
  const isNavMini = themeLayout === 'mini';
  const isNavHorizontal = themeLayout === 'horizontal';

  const isDesktop = useResponsive({ query: 'up', key: 'lg' });

  return (
    <RootStyle
      isDesktop={isDesktop}
      isNavMini={isNavMini}
      isNavVertical={isNavVertical}>
      <Toolbar sx={{ height: 1 }}>
        <Stack
          direction='row'
          sx={{ width: 1 }}
          alignItems='center'
          justifyContent='space-between'>
          <Stack spacing={2} direction='row' alignItems='center'>
            {isNavHorizontal && isDesktop && <Logo />}
            {!isDesktop && <IconButtonAnimate onClick={onOpenNav}>
              <SvgIconStyle src={`/assets/icons/header/ic_menu.svg`} />
            </IconButtonAnimate>}
            <IconButtonAnimate>
              <SvgIconStyle src={`/assets/icons/header/ic_search.svg`} />
            </IconButtonAnimate>
          </Stack>

          <Stack direction='row' alignItems='center' spacing={0.5}>
            <IconButtonAnimate>
              <SvgIconStyle src={`/assets/icons/header/ic_cart.svg`} />
            </IconButtonAnimate>
            <IconButtonAnimate>
              <SvgIconStyle src={`/assets/icons/header/ic_notify.svg`} />
            </IconButtonAnimate>
            <Rotating>
              <IconButtonAnimate onClick={onOpenLayoutSetting}>
                <SvgIconStyle src={`/assets/icons/header/ic_settings.svg`} />
              </IconButtonAnimate>
            </Rotating>
            <AccountPopover />
          </Stack>
        </Stack>
      </Toolbar>
    </RootStyle>
  )
}

export default Header;
