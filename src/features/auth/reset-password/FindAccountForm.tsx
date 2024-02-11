import { Stack, Typography } from '@mui/material';
import { RHFTextField } from '../../../components/RHF';
import LinkButton from '../../../components/buttons/LinkButton';
import { useNavigate } from 'react-router';

const FindAccountForm = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Stack spacing={1.5}>
        <Typography variant='body2' color={'text.secondary'}>
          Enter the email address you used to register your account below.
        </Typography>
        <RHFTextField
          name='email'
          label='Email address'
          placeholder='Eg: example@gmail.com'
        />
      </Stack>

      <Stack direction={'row'} justifyContent={'flex-end'}>
        <LinkButton
          title='Sign in'
          onClick={() => navigate('/sign-in')}
        />
      </Stack>
    </Stack>
  )
}

export default FindAccountForm;
