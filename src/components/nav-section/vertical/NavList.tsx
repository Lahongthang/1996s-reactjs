import { Collapse } from '@mui/material';
import { useToggle } from "../../../hooks";
import { NavConfig } from "../../../configs/types";
import NavItem from "./NavItem";
import NavSubList from "./NavSubList";

type Props = {
  data: NavConfig;
  depth?: number;
}

const NavList = ({ data, depth = 1 }: Props) => {
  const { toggle: open, onToggle } = useToggle();

  return (
    <>
      <NavItem
        data={data}
        open={open}
        depth={depth}
        onClick={onToggle}
      />
      {data.children && (
        <Collapse in={open}>
          <NavSubList data={data.children} depth={depth} />
        </Collapse>
      )}
    </>
  )
}

export default NavList;
