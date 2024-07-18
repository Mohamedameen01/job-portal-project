import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import api from "../api.js";

const INITIAL_STATE = {
  loading: false,
  role: null,
  success: false,
  error: null,
};

export const setUserInfo = createAsyncThunk(
  "user/setUserInfo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/user/info-form", data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const setUserRole = createAsyncThunk(
  "user/setUserRole",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("user/role", data);
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const msgError = error.response.data.message;
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    resetUserSuccess: (state) => {
      state.success = false;
    },
    setUserRoleLocal: (state) => {
      const local = JSON.parse(localStorage.getItem("USER_LOCAL"));
      const updatedLocal = {
        ...local,
        role: state.role,
      };
      localStorage.setItem("USER_LOCAL", JSON.stringify(updatedLocal));
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Set User Info
      .addCase(setUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setUserInfo.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(setUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Set User Role
      .addCase(setUserRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setUserRole.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.role = action.payload;
      })
      .addCase(setUserRole.rejected, (state, action) => {
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetUserSuccess, setUserRoleLocal } = userSlice.actions;
export default userSlice.reducer;
