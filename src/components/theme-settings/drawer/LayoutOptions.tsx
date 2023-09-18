import { useContext } from "react";
import { RadioGroup } from '@mui/material';
import { ThemeContext } from "../ThemeContextProvider";
import { LayoutIcon, MaskControl, StyledCard, StyledWrap } from "../styles";
import { ThemeLayout } from "../../../configs/types";

const OPTIONS: ThemeLayout[] = ['vertical', 'horizontal', 'mini'];

const LayoutOptions = () => {
  const { themeLayout, onChangeLayout } = useContext(ThemeContext);

  return (
    <RadioGroup name="themeLayout" value={themeLayout} onChange={onChangeLayout}>
      <StyledWrap sx={{
        gridTemplateColumns: 'repeat(3, 1fr)',
      }}>
        {OPTIONS.map((layout) => {
          const selected = themeLayout === layout;
          return (
            <StyledCard key={layout} selected={selected} sx={{ p: 1, height: 64 }}>
              <LayoutIcon layout={layout} selected={selected} />
              <MaskControl value={layout} />
            </StyledCard>
          );
        })}
      </StyledWrap>
    </RadioGroup>
  )
}

export default LayoutOptions;
