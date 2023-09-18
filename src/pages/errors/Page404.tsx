import { Container, Typography, Button, Box, styled } from '@mui/material';
import { motion } from 'framer-motion';
import Page from "../../components/Page";
import Image from "../../components/Image";
import { Illustration404 } from '../../resources/assets';
import MotionContainer from "../../components/animate/MotionContainer";
import { varBounce } from "../../components/animate/variants";

const RootStyle = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}))

const Page404 = () => {
  return (
    <Page title={'404 Not Found'} sx={{ width: '100vw', height: '100vh' }}>
      <Container maxWidth='md' component={MotionContainer} sx={{ width: 1, height: 1 }}>
        <RootStyle>
          <motion.div variants={varBounce().in}>
            <Typography
              variant="h3"
              paragraph
              sx={{ mt: 5 }}>
              {'Sorry, page not found!'}
            </Typography>
          </motion.div>

          <motion.div variants={varBounce().in}>
            <Typography color={'text.secondary'} align="center">
              {'Sorry, we couldn’t find the page you’re looking for.Perhaps you’ve mistyped the URL? Be sure to check your spelling.'}
            </Typography>
          </motion.div>

          <motion.div
            variants={varBounce().in}
            style={{
              height: 0,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Image
              disabledEffect
              alt='empty content'
              src={Illustration404}
              sx={{
                maxWidth: 900,
                maxHeight: 1,
              }}
            />
          </motion.div>

          <Button
            href="/"
            variant="contained"
            size="large"
            sx={{ my: 5 }}>
            {'Go To Home'}
          </Button>
        </RootStyle>
      </Container>
    </Page>
  )
}

export default Page404;
