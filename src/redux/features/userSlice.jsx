import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Md. Neamul Hoqe",
  email: "hoqe1997@gmail.com",
  myTasks: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateTasks: (state, { payload }) => {
      console.log(state, payload);
      state.myTasks = [...payload];
    },
  },
});

export const { updateTasks } = userSlice.actions;
export default userSlice.reducer;
