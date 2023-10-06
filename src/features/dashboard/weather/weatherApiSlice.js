import { apiSlice } from "../../../app/api/apiSlice";

export const weatherApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (location) => `/weather?location=${location}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      provideTags: ["Weather"],
    }),
  }),
});

export const { useGetWeatherDataQuery } = weatherApiSlice;
