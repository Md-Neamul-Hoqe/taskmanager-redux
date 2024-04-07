import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import userSlice from "./features/userSlice";
import { postApi } from "./features/postApi";

const store = configureStore({
  reducer: {
    tasks: todoSlice,
    user: userSlice,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

export default store;
