import { ReactNode } from 'react';
import SettingDrawer from './drawer/SettingDrawer';
import ThemeColor from './ThemeColor';
import ThemeContrast from './ThemeContrast';

type Props = {
  children: ReactNode;
}

const ThemeSettings = ({ children }: Props) => {
  return (
    <ThemeColor>
      <ThemeContrast>
        {children}
        <SettingDrawer />
      </ThemeContrast>
    </ThemeColor>
  )
}

export default ThemeSettings;
