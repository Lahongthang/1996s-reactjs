import { Stack, Typography } from '@mui/material';
import { RHFTextField } from '../../../components/RHF';

const VerifyOtpForm = () => {
  return (
    <Stack spacing={1}>
      <Typography variant='body2' color={'text.secondary'}>
        Let us know that this email address belongs to you. Enter the code from the email sent to your email.
      </Typography>
      <RHFTextField
        name='otp'
        label='Otp'
      />
      <Typography variant='body2' color={'text.secondary'}>
        Your OTP will expire after 10 seconds.
      </Typography>
    </Stack>
  )
}

export default VerifyOtpForm;
