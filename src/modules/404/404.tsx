import { Box, Container, Link } from "@mui/material";
import { PATH } from "../core/constants/navigation";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

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
        <LanguageSwitcher />
        <Box>
          <h1 data-testId="404-heading">{t("Page not found")}</h1>
        </Box>
        <Box>
          <Link
            data-testId="to-main-page"
            href={PATH.MAIN_PAGE}
            underline="hover"
          >
            {t("Back to the main page")}
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Page404;
