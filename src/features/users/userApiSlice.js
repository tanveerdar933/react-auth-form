import { apiSlice } from "../../app/api/apiSlice";
import { GET_USER_LIST_URL } from "../../utils/urlList";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => GET_USER_LIST_URL,
      keepUnusedDataFor: 5, //default 60s
    })
  })
})

export const {
  useGetUsersQuery
} = usersApiSlice