import { Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Rest, Sx } from '../configs/types';

type Props = {
  sx?: Sx;
  effect?: 'black-and-white' | 'blur' | 'opacity';
  disabledEffect?: boolean;
} & Rest

const Image = ({ effect = 'blur', disabledEffect = false, sx, ...props }: Props) => {
  const content = (
    <Box
      component={LazyLoadImage}
      wrapperClassName="wrapper"
      effect={disabledEffect ? undefined : effect}
      placeholderSrc={disabledEffect ? undefined : '/assets/placeholder.svg'}
      sx={{ width: 1, height: 1, objectFit: 'cover' }}
      {...props}
    />
  );
  return (
    <Box component='span'
      sx={{
        lineHeight: 1,
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        '& .wrapper': {
          width: 1,
          height: 1,
          backgroundSize: 'cover !important',
        },
        ...sx
      }}
    >
      {content}
    </Box>
  )
}

export default Image;
