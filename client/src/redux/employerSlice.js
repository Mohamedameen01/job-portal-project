import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api";

const INITIAL_STATE = {
  loading: false,
  success: false,
  employerInfo: null,
  error: null,
};

// This Function For Getting Employer All Infos:
export const getAllInfos = createAsyncThunk(
  "employer/getAllInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`employer/all-infos`);
      return data.infos;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Uploading Employer Basic Info:
export const setEmployerBasicInfo = createAsyncThunk(
  "employer/setEmployerBasicInfo",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employer/basic-infos", infos);
      toast.success(data.message);
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

//This Function For Uploading Or Updating Profile Infos:
export const setProfileInfos = createAsyncThunk(
  "employer/setProfileInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.patch("employer/profile-infos", infos);
      toast.success(data.message);
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

//This Function For Uploading Or Updating Social Profile Infos:
export const setSocialProfileInfos = createAsyncThunk(
  "employer/setSocialProfileInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.patch("employer/social-profiles-infos", infos);
      toast.success(data.message);
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

//This Function For Uploading Or Updating Contacting Infos:
export const setContactInformation = createAsyncThunk(
  "employer/setContactInformation",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.patch("employer/contact-infos", infos);
      toast.success(data.message);
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
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
      // Handle Informations State:
      .addCase(getAllInfos.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getAllInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.employerInfo = action.payload;
        state.error = null;
      })
      .addCase(getAllInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = action.payload;
      })

      // Handle Profile Info States:
      .addCase(setProfileInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setProfileInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(setProfileInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Social Profile Info States:
      .addCase(setSocialProfileInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setSocialProfileInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(setSocialProfileInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handle Contact Information States:
      .addCase(setContactInformation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setContactInformation.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(setContactInformation.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export const { resetEmployerSuccess } = employerSlice.actions;
export default employerSlice.reducer;
