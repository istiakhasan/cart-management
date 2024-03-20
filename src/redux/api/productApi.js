import { baseApi } from "./baseApi"
const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: (query) => ({
        url: `/posts`,
        method: "GET",
        params: { ...query }
      }),
      providesTags: ["product"]
    }),
  }),
})

export const { useGetAllProductsQuery} = productApi