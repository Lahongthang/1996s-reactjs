export const varContainer = (props?: any) => {
  const { staggerIn = 0.05, delayIn = 0.05, staggerOut = 0.05 } = props;

  return {
    animate: {
      transition: {
        staggerChildren: staggerIn,
        delayChildren: delayIn,
      },
    },
    exit: {
      transition: {
        staggerChildren: staggerOut,
        staggerDirection: -1,
      },
    },
  }
}
