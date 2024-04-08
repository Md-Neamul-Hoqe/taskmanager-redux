import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import auth from "../../utils/firebase.config";

const initialState = {
  name: null,
  email: null,
  isLoading: true,
  isError: false,
  error: null,
};

export const createUser = createAsyncThunk(
  "userSlice/createUser",
  async ({ name, email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
    });

    console.log("User auth: ", data);

    return {
      email: data.user?.email,
      name: data.user?.displayName,
    };
  }
);

export const loadUser = createAsyncThunk(
  "userSlice/loadUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);

    return {
      email: data.user?.email,
      name: data.user?.displayName,
    };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },

    logOutUser: (state) => {
      console.log(state);

      state.name = null;
      state.email = null;
    },

    toggleLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.name = null;
        state.email = null;
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.name = payload?.name;
        state.email = payload?.email;
      })
      .addCase(createUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = error.message;
        state.name = null;
        state.email = null;
      });

    builder
      .addCase(loadUser.pending, (state) => {
        state.name = null;
        state.email = null;
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.name = payload?.name;
        state.email = payload?.email;
      })
      .addCase(loadUser.rejected, (state, { error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = error.message;
        state.name = null;
        state.email = null;
      });
  },
});

export const { setUser, toggleLoading, logOutUser } = userSlice.actions;
export default userSlice.reducer;
