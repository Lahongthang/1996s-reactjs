import { setUser } from "../../redux/auth/authSlice";
import apiService from "../apiService";

export const userApi = apiService.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query({
      query: () => ({
        url: 'users/get-me',
        method: 'GET',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setUser(data));
      }
    })
  })
})
