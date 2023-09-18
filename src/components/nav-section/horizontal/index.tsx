import { Stack } from "@mui/material";
import { NAV_CONFIGS } from "../../../configs/navConfigs";
import NavList from "./NavList";
import ScrollContainer from "../../scroll";

const NavSectionHorizontal = () => {
  return (
    <Stack sx={{ width: 1 }}
      spacing={1}
      direction='row'
      alignItems='center'
      justifyContent='center'>
      <ScrollContainer>
        {NAV_CONFIGS.map((item) => (
          <NavList
            key={item.name}
            data={item}
          />
        ))}
      </ScrollContainer>
    </Stack>
  )
}

export default NavSectionHorizontal;
