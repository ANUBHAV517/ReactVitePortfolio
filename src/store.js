import { configureStore } from '@reduxjs/toolkit';
// Example slice import
// import counterReducer from '../features/counter/counterSlice';
import sideBarReducer from './slice/SidebarSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    sidebar: sideBarReducer,
  },
});
