import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import i18n from '../../i18n';

export interface Language {
  lang: string;
}

const initialState = {
  lang: 'en',
} as Language;

const languageSwitcherSlice = createSlice({
  name: 'languageSwitcher',
  initialState,
  reducers: {
    languageChange: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
      i18n.changeLanguage(state.lang);
    },
  },
});

export const { languageChange } = languageSwitcherSlice.actions;

export const languageSwitcherSelector = (state: RootState) => state.languageSwitcher;

export default languageSwitcherSlice.reducer;
