import { Stack, Typography } from "@mui/material";
import { RHFPasswordField } from "../../../components/RHF";

const ChangePasswordForm = () => {
  return (
    <Stack spacing={1.5}>
      <Typography variant='body2' color={'text.secondary'}>
        Enter your new password.
      </Typography>
      <Stack spacing={2}>
        <RHFPasswordField
          name='password'
          label='Password'
        />
        <RHFPasswordField
          name='confirmPassword'
          label='Confirm password'
        />
      </Stack>
    </Stack>
  )
}

export default ChangePasswordForm;
