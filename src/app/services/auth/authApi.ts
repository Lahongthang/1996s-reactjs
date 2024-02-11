import { signIn } from "../../redux/auth/authSlice";
import apiService from "../apiService";
import { userApi } from "../user/userApi";

export const authApi = apiService.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: 'auth/sign-up',
        method: 'POST',
        data,
      })
    }),
    signIn: builder.mutation({
      query: (data) => ({
        url: 'auth/sign-in',
        method: 'POST',
        data,
      }),
      async onQueryStarted(reqData, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(signIn(data));
          await dispatch(userApi.endpoints.getMe.initiate(undefined, { forceRefetch: true }));
        } catch (error) {
          console.error(error);
        }
      }
    }),
    signOut: builder.mutation({
      query: () => ({
        url: 'auth/sign-out',
        method: 'DELETE',
      })
    }),
    // Reset password
    findUser: builder.mutation({
      query: (data) => ({
        url: 'auth/find-user',
        method: 'POST',
        data,
      })
    }),
    sendOtp: builder.mutation({
      query: (data) => ({
        url: 'auth/send-otp',
        method: 'POST',
        data,
      })
    }),
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: 'auth/verify-otp',
        method: 'POST',
        data,
      })
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: 'auth/change-password',
        method: 'PATCH',
        data,
      })
    })
  })
})
