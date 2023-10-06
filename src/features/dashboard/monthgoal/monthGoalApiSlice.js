import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../../app/api/apiSlice";

const monthGoalAdapter = createEntityAdapter({
  sortComparer: null,
});

const initialState = monthGoalAdapter.getInitialState();

export const monthGoalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMonthGoals: builder.query({
      query: () => "/dash",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedMonthGoals = responseData.map((goal) => {
          goal.id = goal._id;
          return goal;
        });
        return monthGoalAdapter.setAll(initialState, loadedMonthGoals);
      },
      provideTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "MonthGoal", id: "LIST" },
            ...result.ids.map((id) => ({ type: "MonthGoal", id })),
          ];
        } else return [{ type: "MonthGoal", id: "List" }];
      },
    }),
    addNewMonthGoal: builder.mutation({
      query: (initialGoal) => ({
        url: "/dash",
        method: "POST",
        body: {
          ...initialGoal,
        },
      }),
      invalidatesTags: [{ type: "MonthGoal", id: "LIST" }],
    }),
    updateMonthGoal: builder.mutation({
      query: (initialGoal) => ({
        url: `/dash`,
        method: "PATCH",
        body: {
          ...initialGoal,
        },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MonthGoal", id: arg.id },
      ],
    }),
    deleteMonthGoal: builder.mutation({
      query: ({ id }) => ({
        url: "/dash",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "MonthGoal", id: arg.id },
      ],
    }),
  }),
});

export const {
  useGetMonthGoalsQuery,
  useAddNewMonthGoalMutation,
  useUpdateMonthGoalMutation,
  useDeleteMonthGoalMutation,
} = monthGoalApiSlice;
