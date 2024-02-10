import { Avatar, Divider, MenuItem, Stack, Typography } from "@mui/material";
import IconButtonAnimate from "./animate/IconButtonAnimate";
import Iconify from "./Iconify";
import React, { useState } from "react";
import { ElementNullable } from "../configs/types";
import MenuPopover from "./MenuPopover";
import { dispatch, useSelector } from "../app/store";
import { selectCurrentUser } from "../app/redux/auth/authSlice";
import { authApi } from "../app/services/auth/authApi";
import { enqueueSnackbar } from "notistack";

const AccountPopover = () => {
  const [open, setOpen] = useState<ElementNullable>(null);

  const user = useSelector(selectCurrentUser);

  const handleSignOut = async () => {
    try {
      await dispatch(authApi.endpoints.signOut.initiate(undefined)).unwrap();
      enqueueSnackbar('Sign out successfully', { variant: 'success' });
    } catch (error: any) {
      enqueueSnackbar(error.data.message, { variant: 'error' });
      console.error(error);
    }
  }

  return (
    <>
      <IconButtonAnimate
        sx={{
          width: 52,
          height: 52,
        }}
        onClick={(e: React.MouseEvent<HTMLElement>) => setOpen(e.currentTarget)}
      >
        <Avatar sx={{ width: '95%', height: '95%' }}>
          <Iconify
            icon='solar:user-bold'
            sx={{ color: 'primary.main', width: 24, height: 24 }}
          />
        </Avatar>
      </IconButtonAnimate>
      <MenuPopover
        anchorEl={open}
        onClose={() => setOpen(null)}
      >
        <Stack>
          <Typography variant="subtitle2">{user?.userName}</Typography>
          <Typography variant="body2">{user?.email}</Typography>
        </Stack>
        <Divider sx={{ borderStyle: 'dashed', my: 1 }} />
        <MenuItem>
          <Iconify icon="mingcute:user-setting-fill" sx={{ mr: 0.5 }} />
          <Typography variant="body2">Personal settings</Typography>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <Iconify icon="mdi:sign-out" sx={{ mr: 0.5 }} color="error.main" />
          <Typography variant="body2">Sign out</Typography>
        </MenuItem>
      </MenuPopover>
    </>
  )
}

export default AccountPopover;
