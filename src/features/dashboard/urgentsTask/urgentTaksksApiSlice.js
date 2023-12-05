import { apiSlice } from "../../../app/api/apiSlice";

export const urgentTasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUrgentTasks: builder.query({
      query: () => `/tasks`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        return responseData;
      },
      providesTags: ["Tasks"],
    }),
  }),
});

export const { useGetUrgentTasksQuery } = urgentTasksApiSlice;
