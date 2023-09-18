import { Stack } from "@mui/material";
import Scrollbar from "../../Scrollbar";
import { NAV_CONFIGS } from "../../../configs/navConfigs";
import NavList from "./NavList";
import Logo from "../../Logo";

const NavSectionVertical = () => {
  return (
    <Scrollbar>
      <Stack spacing={0.5} sx={{ px: 2 }}>
        <Stack sx={{
          px: 2,
          width: 1,
          height: 60,
          my: '8px !important',
          justifyContent: 'center',
        }}>
          <Logo />
        </Stack>
        {NAV_CONFIGS.map((item) => (
          <NavList key={item.name} data={item} depth={1} />
        ))}
      </Stack>
    </Scrollbar>
  )
}

export default NavSectionVertical;
