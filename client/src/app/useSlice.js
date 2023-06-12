import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {

    loginUser: [],
    loading: false,
    error: null,
    status: false,

};
//-----------register-------------//

export const postUser = createAsyncThunk(
  "user/register",
  async (newUser, navigate) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/post/register",
        newUser
      );

    } catch (error) {
    
      throw new Error(error.response.data.message);
    }
  }
);

//-----------login---------------//
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (currenUser, navigate) => {
  
    try {
      const response = await axios.post(
        "http://localhost:8080/users/post/login",
        currenUser
      );
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const cleanState = createAsyncThunk("user/clean", () => {
  const clean = { loading: false, error: null };
  return clean;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      (state.loginUser = []), (state.error = null), (state.loading = false),(state.status = false);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUser = action.payload;
        state.error = null;
        state.status = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.status = true;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
