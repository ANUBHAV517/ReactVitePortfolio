import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { sidebarOpen: false },
  reducers: {
    updateSideBar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { updateSideBar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
