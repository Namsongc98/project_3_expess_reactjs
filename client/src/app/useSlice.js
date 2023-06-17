
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  loginUser: [],
  loading: false,
  error: null,
  status: false,
  token: null,
};

//-----------register-------------//
export const postUser = createAsyncThunk("user/register", async (newUser) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/users/post/register",
      newUser
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//-----------login---------------//
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (currenUser) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/users/post/login",
        currenUser
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      (state.loginUser = []),
        (state.error = null),
        (state.loading = false),
        (state.status = false)
      
        
    }
  },
  extraReducers: (builder) => {
    builder
      //loginUser
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginUser = action.payload.data;
        state.token = action.payload.token;
        state.error = null;
        state.status = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //register
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
