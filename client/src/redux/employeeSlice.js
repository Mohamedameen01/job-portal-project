import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "../api";

const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  success: false,
  error: null,
};

// Employee Registration Action with Email:
export const employeeSignup = createAsyncThunk(
  "employee/employeeSignup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/employee/signup", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Employee Signin Action with Email:
export const employeeSignin = createAsyncThunk(
  "employee/employeeSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/employee/signin", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(error.response.data);
    }
  }
);

export const employeeGoogleSignin = createAsyncThunk(
  "employee/employeeGoogleSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/employee/google-signin",
        credentials
      );
      return response.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const employeeMobileVerification = createAsyncThunk(
  "employee/employeeMobileVerification",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/employee/mobile-verification",
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const employeeMobileSignin = createAsyncThunk(
  "employee/employeeMobileSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post(
        "/auth/employee/mobile-signin",
        credentials
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(rejectWithValue(error.response.data));
      return rejectWithValue(error.response.data);
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: INITIAL_STATE,
  reducers: {
    resetEmployeeSuccess: (state) => {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Employee Signup
      .addCase(employeeSignup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employeeSignup.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(employeeSignup.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Employee Signin
      .addCase(employeeSignin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employeeSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.employee;
        state.token = action.payload.token;
      })
      .addCase(employeeSignin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Mobile Signin
      .addCase(employeeMobileVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(employeeMobileVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.otp;
      })
      .addCase(employeeMobileVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetEmployeeSuccess } = employeeSlice.actions;
export default employeeSlice.reducer;
