import { useRef, useEffect } from 'react';
import { useToggle } from '../../../hooks';
import { NavConfig } from '../../../configs/types';
import NavItem from './NavItem';
import NavSubList from './NavSubList';
import { PaperStyle } from './styles';
import { useLocation } from 'react-router-dom';

type Props = {
  data: NavConfig;
  depth?: number;
}

const NavList = ({ data, depth = 1 }: Props) => {
  const { pathname } = useLocation();

  const menuRef = useRef<HTMLDivElement>(null)

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
        anchorOrigin={depth === 1
          ? { vertical: 'bottom', horizontal: 'left' }
          : { vertical: 'center', horizontal: 'right' }
        }
        transformOrigin={depth === 1
          ? { vertical: 'top', horizontal: 'left' }
          : { vertical: 'center', horizontal: 'left' }
        }
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
