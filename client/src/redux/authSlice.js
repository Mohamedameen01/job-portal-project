import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "../api";

const INITIAL_STATE = {
  user: null,
  token: null,
  role: null,
  loading: false,
  success: false,
  error: null,
};

// Registration Action with Email:
export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Sign in Action with Email:
export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(error.response.data);
    }
  }
);

// Sign in Action with Google Account:
export const googleSignin = createAsyncThunk(
  "auth/googleSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/google-signin", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Mobile Number Verification Action
export const mobileVerification = createAsyncThunk(
  "auth/mobileVerification",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const response = await api.post("/auth/mobile-verification", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const mobileSignin = createAsyncThunk(
  "auth/mobileSignin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/mobile-signin", credentials);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.message.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    resetAuthSuccess: (state) => {
      state.success = false;
    },
    setUserAuthLocal: (state) => {
      if (state.role) {
        localStorage.removeItem("USER_LOCAL");
        localStorage.setItem(
          "USER_LOCAL",
          JSON.stringify({ token: state.token, role: state.role })
        );
      }
    },
    setUserLocalLogout: (state) => {
      localStorage.removeItem("USER_LOCAL");
      return { ...state, token: null, user: null };
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle  Signup
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Signin
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Google Signin
      .addCase(googleSignin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.employee;
        state.token = action.payload.token;
      })
      .addCase(googleSignin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Mobile Verification
      .addCase(mobileVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mobileVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(mobileVerification.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Mobile Signin
      .addCase(mobileSignin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mobileSignin.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload.employee;
        state.token = action.payload.token;
      })
      .addCase(mobileSignin.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetAuthSuccess, setUserAuthLocal, setUserLocalLogout } =
  authSlice.actions;
export default authSlice.reducer;
