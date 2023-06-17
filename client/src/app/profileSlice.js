import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk("profile/postprofile", async () => {
  try {
    const response = await axios.get("http://localhost:8080/profile");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});


export const getProfileUser = createAsyncThunk(
  "profile/getprofileuser",
  async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/profile/getprofileuser/${userId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getProfileLogin = createAsyncThunk("profile/getProfileLogin",
    async(idAvatar)=>{
      try {
        const response = await axios.get(`http://localhost:8080/profile/getprofilelogin/${idAvatar}`)
        return response.data
      } catch (error) {
        throw new Error(error)
      }
    }
)

export const postProfile = createAsyncThunk("profile/postProfile", async (formData) => {
  try {
    const response = await axios.post("http://localhost:8080/profile/postprofile",formData);
    const result =  response.data;
    return result;
  } catch (error) {
    throw new Error(error);
  }
});



const initialState = {
  isAvatarLongin:[],
  profile: [],
  loading: false,
  error: null,
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = false;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProfileLogin.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProfileLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAvatarLongin = action.payload;
        state.error = false;
      })
      .addCase(getProfileLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default profileSlice.reducer;
