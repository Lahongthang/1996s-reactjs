import { useContext } from 'react';
import { RadioGroup } from '@mui/material';
import { ThemeContext } from '../ThemeContextProvider';
import { StyledCard, StyledWrap } from '../styles';
import { ThemeContrast } from '../../../configs/types';
import { MaskControl } from '../styles';
import SvgIconStyle from '../../SvgIconStyle';

const OPTIONS: ThemeContrast[] = ['default', 'bold'];

const ContrastOptions = () => {
  const { themeContrast, onChangeContrast } = useContext(ThemeContext);

  return (
    <RadioGroup name='themeContrast' value={themeContrast} onChange={onChangeContrast}>
      <StyledWrap>
        {OPTIONS.map((contrast) => {
          const selected = contrast === themeContrast;
          return (
            <StyledCard key={contrast} selected={selected}>
              <SvgIconStyle
                sx={{ width: 28, height: 28 }}
                src={`/assets/icons/theme-settings/${contrast === 'default' ? 'ic_contrast.svg' : 'ic_contrast_bold.svg'}`}
              />
              <MaskControl value={contrast} />
            </StyledCard>
          );
        })}
      </StyledWrap>
    </RadioGroup>
  )
}

export default ContrastOptions;
