import { Container } from '@mui/material';
import Page from "../../components/Page";

const HomePage = () => {
  return (
    <Page title={'Home'} sx={{ height: 1 }}>
      <Container maxWidth='lg' sx={{ height: 1, pt: 3 }}>
        Home Page
      </Container>
    </Page>
  )
}

export default HomePage;
