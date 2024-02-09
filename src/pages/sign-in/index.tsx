import { Container } from "@mui/material";
import Page from "../../components/Page";
import SignInContainer from "../../features/auth/sign-in";

export default function SignInPage() {
  return (
    <Page title={'Sign In'} sx={{ height: 1 }}>
      <Container maxWidth='sm' sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
        <SignInContainer />
      </Container>
    </Page>
  )
}
