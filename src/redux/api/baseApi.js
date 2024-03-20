import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "https://spart-spirit-shop-backend.vercel.app/" }),
  endpoints: (builder) => ({}),
  tagTypes:['product']
})
