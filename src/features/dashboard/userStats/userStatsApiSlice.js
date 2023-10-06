import { apiSlice } from "../../../app/api/apiSlice";

export const userStatsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserStats: builder.query({
      query: () => `/stats`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const taskCounts = [
          {
            name: "To Do",
            count: responseData.taskCounts.toDoTaskCount,
          },
          {
            name: "In Progress",
            count: responseData.taskCounts.inProgressTaskCount,
          },
          {
            name: "Done",
            count: responseData.taskCounts.doneTaskCount,
          },
        ];

        return { taskCounts, userStats: responseData.userStats };
      },
      providesTags: ["Stats"],
    }),
  }),
});

export const { useGetUserStatsQuery } = userStatsApiSlice;
