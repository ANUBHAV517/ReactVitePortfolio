import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productSliceApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    // getProduct: builder.query({
    //   query: () => 'products',
    // }),
    // searchProduct: builder.query({
    //   query: (searchTerm) =>
    //     `products/search?q=${encodeURIComponent(searchTerm)}`,
    // }),
    getOrSearchProduct: builder.query({
      query: (searchTerm) => {
        if (!searchTerm) {
          return 'products'; // no search term, get all products
        } else {
          return `products/search?q=${encodeURIComponent(searchTerm)}`; // search with term
        }
      },
    }),
  }),
});

export const {
  // useGetProductQuery,
  // useLazyGetProductQuery,
  // useSearchProductQuery,
  // useLazySearchProductQuery,
  useGetOrSearchProductQuery,
  useLazyGetOrSearchProductQuery,
} = productSliceApi;
export default productSliceApi;
