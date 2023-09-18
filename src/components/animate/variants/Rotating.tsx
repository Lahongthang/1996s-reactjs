import { ReactNode } from "react";
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
  direction?: 'rtl' | 'ltr';
  duration?: number;
  ease?: 'linear' | 'anticipate' | 'backIn' | 'backOut' | 'backInOut' | 'circIn' | 'circOut' | 'circInOut' | 'easeIn' | 'easeOut' | 'easeInOut';
}

const Rotating = ({ children, direction = 'ltr', duration = 12, ease = 'linear' }: Props) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: direction === 'ltr' ? 360 : -360 }}
      transition={{ duration, repeat: Infinity, ease }}
    >
      {children}
    </motion.div>
  )
}

export default Rotating;
