import { Stack } from "@mui/material";
import Scrollbar from "../../Scrollbar";
import { NAV_CONFIGS } from "../../../configs/navConfigs";
import NavList from "./NavList";
import Logo from "../../Logo";

const NavSectionMini = () => {
  return (
    <Scrollbar>
      <Stack spacing={0.5} sx={{ px: 0.5 }}>
        <Stack sx={{
          width: 1,
          height: 60,
          my: '8px !important',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Logo />
        </Stack>
        {NAV_CONFIGS.map((item) => (
          <NavList
            depth={1}
            data={item}
            key={item.name}
          />
        ))}
      </Stack>
    </Scrollbar>
  )
}

export default NavSectionMini;
