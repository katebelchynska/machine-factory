import { Box, Select, MenuItem, FormControl } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../core/store/hooks';
import { Language, languageChange, languageSwitcherSelector } from '../../../core/store/slice/languageSwitcherSlice';

const LanguageSwitcher = () => {
  const [, setLang] = useState<Language>({ lang: 'en' });
  const [value, setValue] = useState<string>('ua');

  const selectedLang = useAppSelector(languageSwitcherSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLang(selectedLang);
  }, [selectedLang]);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    switchLanguage(value);
  };

  const switchLanguage = (lng: string) => {
    dispatch(languageChange(lng));
  };
  return (
    <Box>
      <FormControl>
        <Select value={value} onChange={(e: SelectChangeEvent) => handleChange(e)}>
          <MenuItem value="ua">English</MenuItem>
          <MenuItem value="en">Українська</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSwitcher;
