import { Box, Container, Link } from "@mui/material";
import { PATH } from "../core/constants/navigation";
import { useTranslation } from "react-i18next";

const Page404 = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Box>
          <h1 data-testId="404-heading">{t("404.PAGE_NOT_FOUND")}</h1>
        </Box>
        <Box>
          <Link
            data-testId="to-main-page"
            href={PATH.MAIN_PAGE}
            underline="hover"
          >
            {t("404.BACK_TO_MAIN_PAGE")}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Page404;
