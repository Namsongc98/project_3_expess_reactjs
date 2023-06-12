import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const getHotel = createAsyncThunk("hotel/gethotel", async () => {
  try {
    const response = await axios.get("http://localhost:8080/hotel");

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});



const initialState = {
  hotelAll: [],
  loading: false,
  error: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getHotel.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHotel.fulfilled, (state, action) => {
        state.hotelAll = action.payload;
        state.error = null;
      })
      .addCase(getHotel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
     
  },
});

export default hotelSlice.reducer;
