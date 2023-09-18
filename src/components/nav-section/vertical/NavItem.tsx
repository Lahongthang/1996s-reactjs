import { ListItemText, useTheme } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import Iconify from "../../Iconify";
import { NavConfig, Rest } from "../../../configs/types";
import { isActive } from "../utils";
import { ListItemIconStyle, ListItemStyle } from "./styles";

type Props = {
  data: NavConfig;
  depth: number;
  open: boolean;
  onClick: () => void;
} & Rest

const NavItem = ({ data, depth, open, onClick, ...props }: Props) => {
  const theme = useTheme();

  const { pathname } = useLocation();

  const navigate = useNavigate();

  const { label, icon, children, path } = data;

  const active = isActive(path, pathname);

  const handleClick = () => {
    if (!children) navigate(path);
    else onClick();
  }

  return (
    <ListItemStyle
      depth={depth}
      active={active}
      onClick={handleClick}
      {...props}
    >
      {icon && <ListItemIconStyle active={active}>
        {icon}
      </ListItemIconStyle>}
      {depth > 1 && <Iconify
        icon="radix-icons:dot-filled"
        sx={{
          width: 24,
          height: 24,
          p: 0.75,
          mr: 1.5,
          transition: theme.transitions.create(['padding'], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(active && {
            p: 0,
            color: theme.palette.primary.main,
          })
        }}
      />}
      <ListItemText
        primary={label}
        primaryTypographyProps={{
          variant: 'subtitle2',
          fontWeight: depth === 1 ? 500 : 400,
        }}
      />
      {children && <Iconify icon={open ? 'iconamoon:arrow-down-2' : 'iconamoon:arrow-right-2'} />}
    </ListItemStyle>
  )
}

export default NavItem;
