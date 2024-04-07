import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Md. Neamul Hoqe",
  email: "hoqe1997@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, { payload }) => {
      console.log(state, payload);
      //   state.myTasks = [...payload];
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
