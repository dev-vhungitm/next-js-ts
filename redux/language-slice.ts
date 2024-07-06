'use client';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type Language = 'vi' | 'en';
const initialState: Language = ((typeof window != 'undefined' && localStorage.getItem('language')) || 'vi') as Language;

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state: Language, action: PayloadAction<Language>) => {
      return action.payload;
    }
  }
});

export const languageActions = languageSlice.actions;
export const selectLanguage = (state: RootState) => state.language;
const language = languageSlice.reducer;
export default language;
