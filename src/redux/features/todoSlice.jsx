import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  todo: [
    {
      _id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Make the button red and use Hero-icon for trash-bin icon.",
      date: "2023-08-28",
      assignedTo: "Md. Neamul Hoqe",
      priority: "high",
    },
  ],
  userAssignedTasks: [],
};

const todoSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: ({ todo }, { payload }) => {
      /* method: 1 */
      todo.push({ _id: v4(), ...payload, status: "pending" });

      /* method: 2 */
      //   const lastElement = todo.at(-1);
      //   todo.push({
      //     _id: lastElement?._id ? lastElement._id + 1 : 1,
      //     ...payload,
      //     status: "pending",
      //   });
    },

    /* todo destructuring doesn't work for deletion | doesn't update state  */
    removeTask: (state, { payload }) => {
      const updatedTasks = state.todo.filter((task) => task?._id !== payload);

      state.todo = updatedTasks;
    },

    updateStatus: (state, { payload }) => {
      const task = state.todo.find((task) => task._id === payload._id);

      task.status = payload.status;
    },

    setUserTasks: (state, { payload }) => {
      state.userAssignedTasks = state.todo.filter(
        (task) => task.assignedTo === payload && task.status !== "archive"
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, setUserTasks } =
  todoSlice.actions;
export default todoSlice.reducer;
