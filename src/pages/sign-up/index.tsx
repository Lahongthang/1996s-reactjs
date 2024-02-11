import { Container } from "@mui/material";
import Page from "../../components/Page";
import SignUpContainer from "../../features/auth/sign-up";

export default function SignUpPage() {
  return (
    <Page title={'1996s | Sign Up'} sx={{ height: 1 }}>
      <Container maxWidth='sm' sx={{ height: 1, display: 'flex', alignItems: 'center' }}>
        <SignUpContainer />
      </Container>
    </Page>
  )
}
