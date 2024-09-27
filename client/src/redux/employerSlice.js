import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import api from "../api";

const INITIAL_STATE = {
  loading: false,
  success: false,
  employerInfo: null,
  postedJobs: null,
  candidates: null,
  candidate: null,
  companies: null,
  company: null,
  bookmarked: null,
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
      toast.success(data?.message);
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

//This Function For Uploading New Job Post:
export const postNewJobInfos = createAsyncThunk(
  "employer/postNewJobInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employer/new-job-post", infos);
      console.log(infos);

      toast.success(data.message || "Posted Successfully");
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Fetching All Posted Jobs:
export const getPostedJobs = createAsyncThunk(
  "employer/getPostedJobs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employer/get-posted-jobs");
      return data?.infos;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Fetching All Candidates:
export const getAllCandidates = createAsyncThunk(
  "employer/getAllCandidates",
  async (_, { rejectWithValue }) => {
    try {
      console.log("Called");
      
      const { data } = await api.get("employer/all-candidates");
      console.log(data?.candidates);
      return data?.candidates;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Fetching Selected Candidates:
export const getSelectedCandidate = createAsyncThunk(
  "employer/getSelectedCompany",
  async (id, { rejectWithValue }) => {
    try {
      console.log("ID:", id);
      
      const { data } = await api.get(`employer/selected-candidate/${id}`);
      console.log(data?.candidate);
      return data?.candidate;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Fetching All Companies:
export const getOtherCompanies = createAsyncThunk(
  "employer/getOtherCompanies",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employer/other-companies");
      console.log(data?.companies);
      return data?.companies;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// This Function For Fetching Selected Company:
export const getSelectedCompany = createAsyncThunk(
  "employer/getSelectedCompany",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`employer/selcted-company/${id}`);
      console.log(data?.company);
      return data?.company;
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
      })

      // Handle Posted Jobs:
      .addCase(getPostedJobs.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getPostedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.postedJobs = action.payload;
        state.error = null;
      })
      .addCase(getPostedJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      //  // Handle All Candidates:
      .addCase(getAllCandidates.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getAllCandidates.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.candidates = action.payload;
        state.error = null;
      })
      .addCase(getAllCandidates.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

       // Handle Candidate:
       .addCase(getSelectedCandidate.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getSelectedCandidate.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.candidate = action.payload;
        state.error = null;
      })
      .addCase(getSelectedCandidate.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

       // Handle Companies:
       .addCase(getOtherCompanies.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(getOtherCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(getOtherCompanies.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      //  // Handle Company:
      //  .addCase(getSelectedCompany.pending, (state) => {
      //   state.loading = true;
      //   state.success = false;
      //   state.error = null;
      // })
      // .addCase(getSelectedCompany.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.success = true;
      //   state.company = action.payload;
      //   state.error = null;
      // })
      // .addCase(getSelectedCompany.rejected, (state, action) => {
      //   state.loading = false;
      //   state.success = false;
      //   state.error = action.payload;
      // })
  },
});

export const { resetEmployerSuccess } = employerSlice.actions;
export default employerSlice.reducer;
