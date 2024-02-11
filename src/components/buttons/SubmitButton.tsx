import { LoadingButton, LoadingButtonProps } from '@mui/lab';

type Props = {
  title: string;
} & LoadingButtonProps

const SubmitButton = ({ title, ...props }: Props) => {
  return (
    <LoadingButton
      variant='contained'
      type='submit'
      {...props}
    >
      {title}
    </LoadingButton>
  )
}

export default SubmitButton;
