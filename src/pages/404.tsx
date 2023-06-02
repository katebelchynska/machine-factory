import { Box, Container, Link } from "@mui/material";
import { MAIN_PAGE } from "../constants/routes";

const Page404 = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Container maxWidth="xl">
      <Box>
        <h1>Page doesn't exist</h1>
      </Box>
      <Box>
        <Link href={MAIN_PAGE} underline="hover">
          Back to the main page
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Page404;
