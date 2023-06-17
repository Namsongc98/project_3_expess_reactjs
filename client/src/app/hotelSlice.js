import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getHotel = createAsyncThunk("hotel/gethotel", async () => {
  try {
    const response = await axios.get("http://localhost:8080/hotel");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});
//--------------
export const getHotelCity = createAsyncThunk(
  "hotel/hotelCity",
  async (city) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/hotel/getcity/",
        { city: city }
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

//---------------------
export const getHotelId = createAsyncThunk("hotel/gethotelid", async (id) => {
  try {
    const response = await axios.post(
      `http://localhost:8080/hotel/gethotel/${id}`
    );

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
});


//--------------------------------
export const getHotelDetail = createAsyncThunk(
  "hotel/gethotelid",
  async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/hotel/gethotelDetail/${id}`
      );
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.log(error)
      throw new Error(error);
    }
  }
);

const initialState = {
  hotelId: null,
  hotelAll: [],
  getCity: [],
  loading: false,
  error: null,
  getDetail:null,
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
      .addCase(getHotelCity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHotelCity.fulfilled, (state, action) => {
        state.getCity = action.payload;
        state.error = null;
      })
      .addCase(getHotelCity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getHotelDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHotelDetail.fulfilled, (state, action) => {
        state.getDetail = action.payload;
        state.error = null;
      })
      .addCase(getHotelDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hotelSlice.reducer;
