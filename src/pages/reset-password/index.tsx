import { Container } from "@mui/material";
import Page from "../../components/Page";
import ResetPasswordContainer from "../../features/auth/reset-password";

export default function ResetPasswordPage() {
  return (
    <Page title={'1996s | Reset Password'} sx={{ height: 1 }}>
      <Container maxWidth='sm' sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
        <ResetPasswordContainer />
      </Container>
    </Page>
  )
}
