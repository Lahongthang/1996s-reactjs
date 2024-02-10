import { Stack, Typography } from '@mui/material';
import { RHFPasswordField, RHFTextField } from '../../../components/RHF';
import { SubmitButton } from '../../../components/buttons';
import { useNavigate } from 'react-router';
import LinkButton from '../../../components/buttons/LinkButton';

const SignUpForm = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Stack direction={'row'}>
        <Typography variant="body2">Already have an account?&nbsp;</Typography>
        <LinkButton
          title='Sign in'
          variant="subtitle2"
          onClick={() => navigate('/sign-in')}
        />
      </Stack>

      <RHFTextField
        name='userName'
        label='User name'
      />
      <RHFTextField
        name='email'
        label='Email'
      />
      <RHFPasswordField
        name='password'
        label='Password'
      />
      <RHFPasswordField
        name='confirmPassword'
        label='Confirm password'
      />

      <SubmitButton title='Sign Up' />
    </Stack>
  )
}

export default SignUpForm;
