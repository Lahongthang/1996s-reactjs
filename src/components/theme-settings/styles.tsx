import { Box, Stack, CardActionArea, FormControlLabel, Radio, styled, alpha, Theme, useTheme } from '@mui/material';
import { ThemeColor, ThemeContrast, ThemeLayout, ThemeMode } from '../../configs/types';

export const StyledWrap = styled(Box)(() => ({
  gap: 16,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
}))

// ------------------------------------------------------------------

type StyledCardProps = {
  selected: boolean;
  theme?: Theme & { customShadows: any };
};

export const StyledCard = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledCardProps>(({ selected, theme }) => ({
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  borderRadius: theme.spacing(1),
  border: `solid 1px ${alpha(theme.palette.divider, 0.16)}`,
  ...(selected && {
    color: theme.palette.primary.main,
    boxShadow: theme.customShadows.z24,
    border: `solid 1px ${alpha(theme.palette.primary.light, 0.9)}`,
  }),
}))

// ------------------------------------------------------------------

type MaskControlProps = {
  value: ThemeMode | ThemeContrast | ThemeLayout | ThemeColor;
}

export const MaskControl = ({ value }: MaskControlProps) => {
  return (
    <FormControlLabel
      label=""
      value={value}
      control={<Radio sx={{ display: 'none' }} />}
      sx={{
        m: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
      }}
    />
  )
}

// ------------------------------------------------------------------

type LayoutIconProps = {
  layout: ThemeLayout;
  selected: boolean;
}

export const LayoutIcon = ({ layout, selected }: LayoutIconProps) => {
  const theme = useTheme();
  const isNavHorizontal = layout === 'horizontal';
  const isNavMini = layout === 'mini';

  const styles = {
    width: 1,
    height: 1,
    opacity: 0.48,
    borderRadius: 0.5,
    background: `linear-gradient(to right bottom, ${theme.palette.text.secondary}, ${theme.palette.text.disabled})`,
    ...(selected && {
      background: `linear-gradient(to right bottom, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    }),
  };

  return (
    <Stack spacing={0.5}
      sx={{ width: 1, height: 1 }}
      direction={isNavHorizontal ? 'column' : 'row'}
    >
      <Stack
        sx={{
          ...styles,
          ...(isNavHorizontal && {
            height: '20%',
          }),
          ...(!isNavHorizontal && {
            width: '30%',
            ...(isNavMini && {
              width: '15%',
            }),
          }),
        }}
      >

      </Stack>
      <Box sx={{ ...styles, flexGrow: 1, flex: 1, opacity: 0.16 }} />
    </Stack>
  )
}

// ------------------------------------------------------------------

type StyledCircleColorProps = {
  selected: boolean;
  color: string;
}

export const StyledCircleColor = styled('div', {
  shouldForwardProp: (prop) => prop !== 'selected',
})<StyledCircleColorProps>(({ selected, color, theme }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: color,
  transition: theme.transitions.create(['width', 'height'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  ...(selected && {
    width: 24,
    height: 24,
    boxShadow: `-2px 4px 8px 0px ${alpha(color, 0.48)}`,
  }),
}))
