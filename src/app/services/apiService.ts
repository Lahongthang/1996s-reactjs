import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../../utils/axios/axiosBaseQuery';
import { HOST_API_KEY } from '../../constants/app';

const apiService = createApi({
  reducerPath: 'apiService',
  baseQuery: axiosBaseQuery({
    baseUrl: HOST_API_KEY,
  }),
  endpoints: () => ({}),
})

export default apiService;
