import { ReactNode, forwardRef } from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Rest } from '../configs/types';

type Props = {
  title?: string,
  children: ReactNode,
  meta?: any,
} & Rest

const Page = forwardRef(({ title, meta, children, ...props }: Props, ref) => {
  return <>
    <Helmet>
      <title>{title}</title>
      {meta}
    </Helmet>
    <Box ref={ref} {...props}>
      {children}
    </Box>
  </>
})

export default Page;
