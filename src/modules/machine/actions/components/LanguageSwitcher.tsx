import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/store/hooks";
import {
  Language,
  languageChange,
  languageSwitcherSelector,
} from "../store/languageSwitcherSlice";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState<Language>({ lang: "en" });
  const [isSelectedEn, setIsSelectedEn] = useState<boolean>(true);
  const [isSelectedUa, setIsSelectedUa] = useState<boolean>(false);

  const selectedLang = useAppSelector(languageSwitcherSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLang(selectedLang);
  }, [selectedLang]);

  const switchLanguage = (lng: string) => {
    dispatch(languageChange(lng));
    if (lng === "en") {
      setIsSelectedEn(true);
      setIsSelectedUa(false);
    } else {
      setIsSelectedEn(false);
      setIsSelectedUa(true);
    }
  };
  return (
    <Box>
      <Button
        variant={isSelectedEn ? "contained" : "text"}
        onClick={() => switchLanguage("en")}
      >
        English
      </Button>
      <Button
        variant={isSelectedUa ? "contained" : "text"}
        onClick={() => switchLanguage("ua")}
      >
        Українська
      </Button>
    </Box>
  );
};

export default LanguageSwitcher;
