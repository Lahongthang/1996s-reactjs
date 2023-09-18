import { forwardRef } from "react";
import { ListItemIconStyle, ListItemStyle } from "./styles";
import { NavConfig } from "../../../configs/types";
import { isActive } from "../utils";
import { useLocation, useNavigate } from "react-router-dom";
import { ListItemText, Stack } from "@mui/material";
import Iconify from "../../Iconify";

type Props = {
  data: NavConfig;
  open: boolean;
  depth: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem = forwardRef<HTMLDivElement, Props>(({ data, open, depth, onMouseEnter, onMouseLeave }, ref) => {
  const { label, path, icon, children } = data;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const active = isActive(path, pathname);

  const handleClick = () => {
    if (!children) navigate(path);
  }

  return (
    <ListItemStyle
      ref={ref}
      open={open}
      depth={depth}
      active={active}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Stack direction='row'>
        {icon && <ListItemIconStyle active={active}>
          {icon}
        </ListItemIconStyle>}
        {children && (
          <Iconify
            icon="iconamoon:arrow-right-2"
            sx={{
              top: 8,
              right: 0,
              position: 'absolute',
            }}
          />
        )}
      </Stack>
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          variant: 'subtitle2',
          fontSize: '11px',
          fontWeight: 500,
          ...(depth > 1 && {
            fontSize: '14px',
            fontWeight: 400,
          }),
        }}
      />
    </ListItemStyle>
  )
})

export default NavItem;
