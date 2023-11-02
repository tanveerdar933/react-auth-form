import { apiSlice } from "../../app/api/apiSlice";
import { LOGIN_URL } from "../../utils/urlList";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: LOGIN_URL,
        method: "POST",
        body: { ...credentials }
      })
    })
  })
})

export const {
  useLoginMutation
} = authApiSlice