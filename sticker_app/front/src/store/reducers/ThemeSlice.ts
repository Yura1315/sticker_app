import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  checked: boolean;
}

const initialState: ThemeState = {
  checked: false,
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state) {
      state.checked = !state.checked;
    }
  }
});

export default ThemeSlice.reducer;
