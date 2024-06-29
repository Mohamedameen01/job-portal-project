import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "../api.js";

const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  success: false,
  error: null,
};

// Employer Registration Action with Email:
export const employerSignup = createAsyncThunk(
  "employer/employerSignup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/employer/signup", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

const employerSlice = createSlice({
  name: "employer",
  initialState: INITIAL_STATE,
  reducers: {
    resetEmployerSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Employer Signup
      .addCase(employerSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employerSignup.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(employerSignup.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetEmployerSuccess } = employerSlice.actions;
export default employerSlice.reducer;
