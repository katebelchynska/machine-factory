/* eslint-disable react/no-unescaped-entities */
import { Box, Container, Link } from '@mui/material';
import { PATH } from '../core/constants/navigation';

const Page404 = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
  >
    <Container maxWidth="xl">
      <Box>
        <h1 data-testId="404-heading">Page doesn't exist</h1>
      </Box>
      <Box>
        <Link data-testId="to-main-page" href={PATH.MAIN_PAGE} underline="hover">
          Back to the main page
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Page404;
