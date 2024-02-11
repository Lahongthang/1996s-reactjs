export const varTranHover = (props: any) => {
  const { duration = 0.32, ease = [0.43, 0.13, 0.23, 0.96] } = props ?? {};

  return { duration, ease };
}
  
export const varTranEnter = (props: any) => {
  const { duration = 0.64, ease = [0.43, 0.13, 0.23, 0.96] } = props ?? {};

  return { duration, ease };
}

export const varTranExit = (props: any) => {
  const { duration = 0.48, ease = [0.43, 0.13, 0.23, 0.96] } = props ?? {};

  return { duration, ease };
}
