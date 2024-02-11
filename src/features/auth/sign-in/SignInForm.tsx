import { Stack, Typography } from "@mui/material";
import { RHFPasswordField, RHFTextField } from "../../../components/RHF";
import { useNavigate } from "react-router";
import LinkButton from "../../../components/buttons/LinkButton";

const SignInForm = () => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Stack direction={'row'}>
        <Typography variant="body2">New user?&nbsp;</Typography>
        <LinkButton
          variant="subtitle2"
          title="Create an account"
          onClick={() => navigate('/sign-up')}
        />
      </Stack>

      <RHFTextField
        name="userName"
        label='User name'
        placeholder="Eg: John Doe"
      />
      <RHFPasswordField
        name="password"
        label='Password'
      />

      <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
        <LinkButton
          title="Forgot password?"
          onClick={() => navigate('/reset-password')}
        />
      </Stack>
    </Stack>
  )
}

export default SignInForm;
