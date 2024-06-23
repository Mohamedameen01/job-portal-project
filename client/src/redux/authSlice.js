import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

const INITIAL_STATE = {
  employee: null,
  token: null,
  loading: false,
  error: null,
};

export const employeeSignup = createAsyncThunk(
  "auth/employeeSignup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/employee/signup", credentials);
      return response.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);

export const employeeSignin = createAsyncThunk(
  "auth/employeeSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/employee/signin", credentials);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      // Handle Employee Signup
      .addCase(employeeSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employeeSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload.employee;
        state.token = action.payload.token;
      })
      .addCase(employeeSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle Employee Signin
      .addCase(employeeSignin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employeeSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.employee = action.payload.employee;
        state.token = action.payload.token;
      })
      .addCase(employeeSignin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
