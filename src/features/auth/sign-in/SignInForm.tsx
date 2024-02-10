import { Link, Stack, Typography } from "@mui/material";
import { RHFPasswordField, RHFTextField } from "../../../components/RHF";
import { SubmitButton } from "../../../components/buttons";
import { useNavigate } from "react-router";

const SignInForm = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Stack direction={'row'}>
        <Typography variant="body2">New user?&nbsp;</Typography>
        <Link
          component='button'
          variant="subtitle2"
          onClick={() => navigate('/sign-up')}
        >
          Create an account
        </Link>
      </Stack>

      <RHFTextField
        name="userName"
        label='User name'
      />
      <RHFPasswordField
        name="password"
        label='Password'
      />

      <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
        <Link
          component='button'
          variant="body2"
          onClick={() => navigate('/reset-password')}
        >
          Forgot password?
        </Link>
      </Stack>

      <SubmitButton title="Sign In" />
    </Stack>
  )
}

export default SignInForm;
