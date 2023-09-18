import { useEffect, useRef } from "react";
import { NavConfig } from "../../../configs/types";
import NavItem from "./NavItem";
import { useToggle } from "../../../hooks";
import { useLocation } from "react-router-dom";
import { PaperStyle } from "./styles";
import NavSubList from "./NavSubList";

type Props = {
  data: NavConfig;
  depth: number;
}

const NavList = ({ data, depth }: Props) => {
  const { pathname } = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);

  const { toggle: open, onOpen, onClose } = useToggle();

  useEffect(() => {
    if (open) onClose();
  }, [pathname])

  return (
    <>
      <NavItem
        data={data}
        open={open}
        depth={depth}
        ref={menuRef}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      />
      {open && data.children && <PaperStyle
        open={open}
        anchorEl={menuRef.current}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        slotProps={{
          paper: {
            onMouseEnter: onOpen,
            onMouseLeave: onClose,
          }
        }}
      >
        <NavSubList data={data.children} depth={depth} />
      </PaperStyle>}
    </>
  )
}

export default NavList;
