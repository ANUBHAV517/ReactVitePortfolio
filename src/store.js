import { configureStore } from '@reduxjs/toolkit';
import sideBarReducer from './redux/slice/SidebarSlice';
import productSliceApi from './redux/slice/ProductSliceApi';

export const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    [productSliceApi.reducerPath]: productSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSliceApi.middleware),
});
