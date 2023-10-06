import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../app/api/apiSlice";

const boardAdapter = createEntityAdapter({
  sortComparer: null,
});

const initialState = boardAdapter.getInitialState();

export const boardApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUserBoards: builder.query({
      query: () => "/board",
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedBoards = responseData.map((board) => {
          board.id = board._id;
          return board;
        });
        return boardAdapter.setAll(initialState, loadedBoards);
      },
      provideTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Board", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Board", id })),
          ];
        } else return [{ type: "Board", id: "List" }];
      },
    }),

    addNewBoard: builder.mutation({
      query: (initialGoal) => ({
        url: "/board",
        method: "POST",
        body: {
          ...initialGoal,
        },
      }),
      invalidatesTags: [{ type: "Board", id: "LIST" }],
    }),
    updateBoard: builder.mutation({
      query: (initialGoal) => ({
        url: `/board`,
        method: "PATCH",
        body: {
          ...initialGoal,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Board", id: arg.id }],
    }),
    deleteBoard: builder.mutation({
      query: ({ id }) => ({
        url: "/board",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Board", id: arg.id }],
    }),
  }),
});

export const {
  useGetAllUserBoardsQuery,
  useGetSpecificUserBoardQuery,
  useAddNewBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} = boardApiSlice;
