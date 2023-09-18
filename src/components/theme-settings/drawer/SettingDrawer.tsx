import { useContext } from "react";
import { Drawer, Stack, Typography, IconButton, Divider, alpha } from "@mui/material";
import { useTheme } from '@mui/material/styles'
import Iconify from "../../Iconify";
import Scrollbar from "../../Scrollbar";
import Block from "./Block";
import ModeOptions from "./ModeOptions";
import LayoutOptions from "./LayoutOptions";
import ColorOptions from "./ColorOptions";
import { ThemeContext } from "../ThemeContextProvider";
import ContrastOptions from "./ContrastOptions";
import { defaultSettings } from "../configs";

const SPACING = 2.5;
const DRAWER_WIDTH = 280;

const SettingDrawer = () => {
  const theme = useTheme();
  const {
    open,
    onClose,
    themeMode,
    themeColor,
    themeLayout,
    themeContrast,
    onResetSettings,
  } = useContext(ThemeContext);

  const isNotDefault =
    themeMode !== defaultSettings.themeMode ||
    themeContrast !== defaultSettings.themeContrast ||
    themeLayout !== defaultSettings.themeLayout ||
    themeColor !== defaultSettings.themeColor;

  return (
    <Drawer
      open={open}
      anchor="right"
      onClose={onClose}
      BackdropProps={{ invisible: true }}
      PaperProps={{
        sx: {
          width: DRAWER_WIDTH,
          boxShadow: `-48px 0px -48px 0 ${alpha(
            themeMode === 'light'
              ? theme.palette.grey[400]
              : theme.palette.common.black,
            0.16
          )}`,
          backgroundColor: alpha(theme.palette.background.default, 0.95),
        },
      }}
    >
      <Stack
        sx={{ p: 2 }}
        direction='row'
        alignItems='center'
        justifyContent='space-between'>
        <Typography variant="h6">
          Settings
        </Typography>
        <Stack direction='row' alignItems='center'>
          <Stack sx={{ position: 'relative' }}>
            {isNotDefault && <Iconify
              icon="radix-icons:dot-filled"
              sx={{
                right: 0,
                width: 20,
                height: 20,
                color: 'error.main',
                position: 'absolute',
              }}
            />}
            <IconButton
              sx={{ width: 40, height: 40 }}
              onClick={() => { isNotDefault && onResetSettings() }}>
              <Iconify
                icon="system-uicons:reset"
                sx={{ width: 20, height: 20 }}
              />
            </IconButton>
          </Stack>
          <IconButton onClick={onClose}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ borderStyle: 'dashed' }} />
      <Scrollbar sx={{ p: SPACING, pb: 0 }}>
        <Block title="Mode">
          <ModeOptions />
        </Block>
        <Block title="Contrast">
          <ContrastOptions />
        </Block>
        <Block title="Layout">
          <LayoutOptions />
        </Block>
        <Block title="Color">
          <ColorOptions />
        </Block>
      </Scrollbar>
    </Drawer>
  )
}

export default SettingDrawer;
