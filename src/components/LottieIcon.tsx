import { forwardRef } from "react";
import { Box } from "@mui/material";
import { useLottie } from "lottie-react";

type Props = {
  animationData: any;
  loop?: boolean;
  style?: any;
}

const LottieIcon = forwardRef(({ animationData, style, loop = false }: Props, ref) => {
  const options = {
    animationData: animationData,
    loop: loop,
  }

  const styles = {
    height: '150px',
    ...style
  }

  const { View } = useLottie(options, styles);

  return (
    <Box ref={ref}>
      {View}
    </Box>
  )
})

export default LottieIcon;
