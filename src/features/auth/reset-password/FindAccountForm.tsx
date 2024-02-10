import { Stack } from '@mui/material';
import { RHFTextField } from '../../../components/RHF';
import LinkButton from '../../../components/buttons/LinkButton';
import { useNavigate } from 'react-router';

const FindAccountForm = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={1}>
      <Stack direction={'row'}>
        <LinkButton
          title='Sign in'
          variant='subtitle2'
          onClick={() => navigate('/sign-in')}
        />
      </Stack>
      <RHFTextField
        name='userName'
        label='User name or email address'
      />
    </Stack>
  )
}

export default FindAccountForm;
