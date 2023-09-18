import React, { createContext, ReactNode, useMemo, useCallback } from 'react';
import { defaultSettings } from './configs';
import { useLocalStorage, useToggle } from '../../hooks';
import { presetColorOptions, defaultPreset, getPresetColor } from './presetColors';

const initialState = {
  ...defaultSettings,
  open: false,
  onOpen: () => { },
  onClose: () => { },
  // Mode
  onChangeMode: () => { },
  // Contrast
  onChangeContrast: () => { },
  // Layout
  onChangeLayout: () => { },
  onToggleLayout: () => { },
  // Color
  onChangeColor: () => { },
  presetColor: defaultPreset,
  presetColorOptions: [],
  // Reset
  onResetSettings: () => { },
}

export const ThemeContext = createContext(initialState);

type Props = {
  children: ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {
  const { toggle: open, onOpen, onClose } = useToggle();
  const { value: settings, setValueInLocalStorage: setSettings } = useLocalStorage('theme-settings', defaultSettings);

  const onChangeMode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const themeMode = e.target.value;
    setSettings({ ...settings, themeMode });
  }, [settings, setSettings])

  const onChangeContrast = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const themeContrast = e.target.value;
    setSettings({ ...settings, themeContrast });
  }, [settings, setSettings])

  const onChangeLayout = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const themeLayout = e.target.value;
    setSettings({ ...settings, themeLayout });
  }, [settings, setSettings])

  const onToggleLayout = useCallback(() => {
    const currLayout = settings.themeLayout;
    if (currLayout === 'horizontal') return;
    if (currLayout === 'mini') setSettings({ ...settings, themeLayout: 'vertical' });
    else setSettings({ ...settings, themeLayout: 'mini' });
  }, [settings, setSettings])

  const onChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const themeColor = e.target.value;
    setSettings({ ...settings, themeColor });
  }, [settings, setSettings])

  const onResetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, [setSettings])

  const value = useMemo(() => ({
    ...settings,
    open,
    onOpen,
    onClose,
    onChangeMode,
    onChangeContrast,
    onChangeLayout,
    onToggleLayout,
    onChangeColor,
    presetColorOptions,
    presetColor: getPresetColor(settings.themeColor),
    onResetSettings,
  }), [
    open,
    onOpen,
    onClose,
    settings,
    onChangeMode,
    onChangeContrast,
    onChangeLayout,
    onToggleLayout,
    onChangeColor,
    onResetSettings,
  ])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
