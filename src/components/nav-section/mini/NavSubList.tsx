import { Stack } from "@mui/material";
import { NavConfig } from "../../../configs/types";
import NavList from "./NavList";

type Props = {
  data: NavConfig[];
  depth: number;
}

const NavSubList = ({ data, depth }: Props) => {
  return (
    <Stack spacing={0.5}>
      {data.map((item) => (
        <NavList
          key={item.name}
          data={item}
          depth={depth + 1}
        />
      ))}
    </Stack>
  )
}

export default NavSubList;
