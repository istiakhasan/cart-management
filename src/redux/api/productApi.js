import { baseApi } from "./baseApi"
const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (query) => ({
        url: `/api/v1/product/all-products`,
        method: "GET",
        params: { ...query }
      }),
      providesTags: ["product"]
    }),
  }),
})

export const { useGetAllProductsQuery} = productApi