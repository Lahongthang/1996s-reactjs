import { useTheme, Breakpoint } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type QueryType = 'up' | 'down' | 'between' | 'only';
type BreakpointType = Breakpoint | number;

type Props = {
  query: QueryType;
  key: BreakpointType;
  start?: BreakpointType;
  end?: BreakpointType;
}

export default function useResponsive({ query, key, start, end }: Props): boolean {
  const theme = useTheme();

  let queryInput: string | null = null;

  switch (query) {
    case 'up':
      queryInput = theme.breakpoints.up(key);
      break;
    case 'down':
      queryInput = theme.breakpoints.down(key);
      break;
    case 'between':
      if (start && end) queryInput = theme.breakpoints.between(start, end);
      break;
    case 'only':
      if (typeof key === 'string') queryInput = theme.breakpoints.only(key);
      break;
    default:
      break;
  }

  if (!queryInput) throw new Error('Invalid query or missing parameters.');

  return useMediaQuery(queryInput);
}
