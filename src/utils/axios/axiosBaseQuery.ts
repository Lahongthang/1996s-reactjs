import axiosInstance from "./axiosInstance";

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }) =>
  async ({
    url,
    method,
    data,
    params,
  }: {
    url: string;
    method: string;
    data?: object;
    params?: object;
  }, {
    getState,
  }: {
    getState: any;
  }) => {
    const accessToken = getState().auth.token;
    try {
      const result = await axiosInstance({
        baseURL: baseUrl,
        url,
        method,
        data,
        params,
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      })
      return {
        data: result.data,
      }
    } catch (error: any) {
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        }
      }
    }
  }

export default axiosBaseQuery;
