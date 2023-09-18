import { useContext } from "react";
import { RadioGroup, alpha } from '@mui/material';
import { MaskControl, StyledCard, StyledCircleColor, StyledWrap } from "../styles";
import { presetColorOptions } from "../presetColors";
import { ThemeContext } from "../ThemeContextProvider";

const ColorOptions = () => {
  const { themeColor, onChangeColor } = useContext(ThemeContext);

  return (
    <RadioGroup name="themeColor" value={themeColor} onChange={onChangeColor}>
      <StyledWrap sx={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {presetColorOptions.map((color) => {
          const { name, value } = color;
          const selected = themeColor === name;
          return (
            <StyledCard
              key={name}
              selected={selected}
              sx={{
                height: 48,
                ...(selected && {
                  bgcolor: alpha(value, 0.08),
                }),
              }}
            >
              <StyledCircleColor selected={selected} color={value} />
              <MaskControl value={name} />
            </StyledCard>
          );
        })}
      </StyledWrap>
    </RadioGroup>
  )
}

export default ColorOptions;
