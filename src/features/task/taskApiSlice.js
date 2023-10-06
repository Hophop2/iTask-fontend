import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../../app/api/apiSlice";

const taskAdapter = createEntityAdapter({
  sortComparer: (a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1,
});

const initialState = taskAdapter.getInitialState();

export const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTaskById: builder.query({
      query: (taskId) => `/tasks/${taskId}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const task = responseData;
        task.id = task._id;
        return taskAdapter.upsertOne(initialState, task);
      },
      provideTags: (result, error, arg) => {
        if (result?.id) {
          return [{ type: "Task", id: result.id }];
        } else return [];
      },
    }),
    addNewTask: builder.mutation({
      query: (initialTask) => ({
        url: "/tasks",
        method: "POST",
        body: {
          ...initialTask,
        },
      }),
      invalidatesTags: [{ type: "Task", id: "LIST" }],
    }),
    getAllUserTasks: builder.query({
      query: (boardId) => `/board/${boardId}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        console.log("Response Data:", responseData);
        const tasks = responseData;
        const normalizedData = tasks.map((task) => ({ ...task, id: task._id }));
        console.log(normalizedData);
        return taskAdapter.setAll(initialState, normalizedData);
      },
      provideTags: (result, error, arg) => {
        if (result?.id) {
          return [{ type: "Task", id: result.id }];
        } else return [];
      },
    }),
    updateTask: builder.mutation({
      query: (updatedTask) => {
        const { taskId, ...taskData } = updatedTask;
        console.log(updatedTask);
        return {
          url: `/tasks/${taskId}`,
          method: "PATCH",
          body: updatedTask,
        };
      },
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
    deleteTask: builder.mutation({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Task", id: arg.id }],
    }),
  }),
});

export const {
  useGetAllUserTasksQuery,
  useGetTaskByIdQuery,
  useAddNewTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice;
