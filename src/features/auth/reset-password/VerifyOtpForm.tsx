import { Stack, Typography } from '@mui/material';
import { RHFTextField } from '../../../components/RHF';
import { useFormContext } from 'react-hook-form';
import { useEffect, useState } from 'react';
import LinkButton from '../../../components/buttons/LinkButton';
import { dispatch } from '../../../app/store';
import { authApi } from '../../../app/services/auth/authApi';
import { enqueueSnackbar } from 'notistack';

const VerifyOtpForm = () => {
  const { getValues } = useFormContext();
  const email = getValues('email');

  const [expiresTime, setExpiresTime] = useState<number>(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (expiresTime > 0) setExpiresTime(expiresTime - 1);
    }, 1000)
    return () => clearTimeout(timeoutId);
  }, [expiresTime])

  const handleResendOtp = async () => {
    try {
      await dispatch(authApi.endpoints.sendOtp.initiate({ email })).unwrap();
      setExpiresTime(10);
    } catch (error: any) {
      enqueueSnackbar(error.data.message);
      console.error(error);
    }
  }

  return (
    <Stack spacing={1.5}>
      <Typography variant='body2' color={'text.secondary'}>
        Let us know that this email address belongs to you. Enter the code from the email sent to <strong>{email}</strong>
      </Typography>
      <RHFTextField
        name='otp'
        label='OTP'
        placeholder='Eg: 123456'
      />
      <Typography variant='body2' color={'text.secondary'}>
        {expiresTime > 0 ? (
          <>Your OTP will expire after <strong>{expiresTime}</strong> seconds.</>
        ) : (
          <>Your OTP has expired!</>
        )}
      </Typography>
      {expiresTime === 0 && <Stack direction={'row'}>
        <LinkButton title='Send OTP again' onClick={handleResendOtp} />
      </Stack>}
    </Stack>
  )
}

export default VerifyOtpForm;
