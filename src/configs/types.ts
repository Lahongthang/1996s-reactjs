import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type StringNullable = string | null;
export type NumberNullable = number | null;
export type DateNullable = Date | null;

// ...rest
export type Rest = {
  [key: string]: any,
}

// sx
export type Sx = SxProps<Theme>

// App themes
export type ThemeMode = 'dark' | 'light';
export type ThemeContrast = 'default' | 'bold';
export type ThemeLayout = 'vertical' | 'horizontal' | 'mini';
export type ThemeColor = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red';

export type ThemeSettings = {
  themeMode: ThemeMode;
  themeContrast: ThemeContrast;
  themeLayout: ThemeLayout;
  themeColor: ThemeColor;
}

export type PresetColor = {
  name: ThemeColor;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

// Navbar
export type NavConfig = {
  name: string;
  label: string;
  path: string;
  icon?: ReactNode;
  children?: NavConfig[],
}
