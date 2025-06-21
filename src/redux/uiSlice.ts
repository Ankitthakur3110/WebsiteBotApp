import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});

export const { setSection } = uiSlice.actions;
export default uiSlice.reducer;
