import { forwardRef } from "react";
import { ListItemText } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import Iconify from "../../Iconify";
import { NavConfig } from "../../../configs/types";
import { ListItemIconStyle, ListItemStyle } from "./styles";
import { isActive } from "../utils";

type Props = {
  data: NavConfig;
  depth: number;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem = forwardRef<HTMLDivElement, Props>(({ data, depth, open, onMouseEnter, onMouseLeave }, ref) => {
  const { label, path, icon, children } = data;

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const active = isActive(path, pathname);

  const handleClick = () => {
    if (!children) navigate(path);
  };

  return (
    <ListItemStyle
      ref={ref}
      open={open}
      active={active}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon && <ListItemIconStyle active={active}>
        {icon}
      </ListItemIconStyle>}
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          variant: 'subtitle2',
          fontWeight: depth === 1 ? 500 : 400,
        }}
      />
      {children && <Iconify
        icon={depth === 1
          ? open
            ? "iconamoon:arrow-up-2"
            : "iconamoon:arrow-down-2"
          : open
            ? "iconamoon:arrow-up-2"
            : "iconamoon:arrow-right-2"
        }
        sx={{ width: 18, height: 18 }}
      />}
    </ListItemStyle>
  )
})

export default NavItem;
