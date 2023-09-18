import { RadioGroup } from "@mui/material";
import { useContext } from "react";
import { MaskControl, StyledCard, StyledWrap } from "../styles";
import SvgIconStyle from "../../SvgIconStyle";
import { ThemeContext } from "../ThemeContextProvider";
import { ThemeMode } from "../../../configs/types";

const OPTIONS: ThemeMode[] = ['light', 'dark'];

const ModeOptions = () => {
  const { themeMode, onChangeMode } = useContext(ThemeContext);

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={onChangeMode}>
      <StyledWrap>
        {OPTIONS.map((mode) => {
          const selected = themeMode === mode;
          return (
            <StyledCard key={mode} selected={selected}>
              <SvgIconStyle
                sx={{ width: 28, height: 28 }}
                src={`/assets/icons/theme-settings/${mode === 'light' ? 'ic_sun.svg' : 'ic_moon.svg'}`}
              />
              <MaskControl value={mode} />
            </StyledCard>
          );
        })}
      </StyledWrap>
    </RadioGroup>
  )
}

export default ModeOptions;
