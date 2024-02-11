import { Container } from '@mui/material';
import Page from "../../../components/Page";
import AllProductsContainer from '../../../features/product/all';

const AllProductPage = () => {
  return (
    <Page title={'1996s | All Products'} sx={{ height: 1 }}>
      <Container maxWidth='lg' sx={{ height: 1, pt: 3 }}>
        <AllProductsContainer />
      </Container>
    </Page>
  )
}

export default AllProductPage;
