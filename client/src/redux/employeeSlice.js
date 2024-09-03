import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  loading: false,
  success: false,
  employeeInfo: null,
  jobs: null,
  selectedJob: null,
  relatedJobs: null,
  companies: null,
  selectedCompany: null,
  openJobs: null,
  bookMarkedJobs: null,
  appliedJobs: null,
  error: null,
};

// Action for Uploading Education Infos:
export const uploadEducationInfos = createAsyncThunk(
  "employer/uploadEducationInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/education-infos", infos);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action for Uploading Experience Infos:
export const uploadExperienceInfos = createAsyncThunk(
  "employer/uploadExperienceInfos",
  async (infos, { rejectWithValue }) => {
    try {
      console.log("Infos: ", infos);
      const { data } = await api.post("employee/experience-infos", infos);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action for Uploading Project Infos:
export const uploadProjectInfos = createAsyncThunk(
  "employer/uploadProjectInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/project-infos", infos);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action for Uploading Certificate Infos:
export const uploadCertificateInfos = createAsyncThunk(
  "employer/uploadCertificateInfos",
  async (infos, { rejectWithValue }) => {
    try {
      console.log("certi", infos);
      
      const { data } = await api.post("employee/certificate-infos", infos);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action for Uploading Preference Infos:
export const uploadPreferenceInfos = createAsyncThunk(
  "employer/uploadPreferenceInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/preference-infos", infos);
      toast.success(data?.message);
      return data;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action for Get All Jobs:
export const getAllJobs = createAsyncThunk(
  "employee/getAllJobs",
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await api.get("employee/all-jobs")
      return data?.jobs
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Filtered Jobs:
export const getFilteredJobs = createAsyncThunk(
  "employee/getFilteredJobs",
  async (searchParams, {rejectWithValue}) => {
    try {
      const { data } = await api.post("employee/filter-jobs", {searchParams});
      return data?.jobs;
    } catch (error) {
      console.log(error);
      
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Selected Job:
export const getSelectedJob = createAsyncThunk(
  "employee/getSelectedJob",
  async (id, { rejectWithValue}) => {
    try { 
      const { data } = await api.get(`employee/job/${id}`);
      return data?.job
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Related Jobs:
export const getRelatedJobs = createAsyncThunk(
  "employee/getRelatedJobs",
  async (id, {rejectWithValue}) => {
    try {
      const { data } = await api.get(`employee/related-jobs/${id}`);
      return data?.relatedJobs;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Companies:
export const getAllCompanies = createAsyncThunk(
  "employee/getAllCompanies",
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await api.get("employee/all-companies");
      return data?.companies
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Filtered Compnaies:
export const getFilteredCompanies = createAsyncThunk(
  "employee/getFilteredCompnaies",
  async (searchParams, {rejectWithValue}) => {
    try {
      const { data } = await api.post("employee/filter-companies", {searchParams});
      return data?.companies;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Selected Company:
export const getSelectedCompany = createAsyncThunk(
  "employee/getSelectedCompany",
  async (id, { rejectWithValue}) => {
    try { 
      const { data } = await api.get(`employee/company/${id}`);
      return data?.company
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Company Open Jobs:
export const getCompanyOpenJobs = createAsyncThunk(
  "employee/getCompanyOpenJobs",
  async (id, { rejectWithValue}) => {
    try { 
      const { data } = await api.get(`employee/company/open-jobs/${id}`);
      
      return data?.openJobs
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const getHomeFindJobs = createAsyncThunk(
  "employee/getHomeFindJobs",
  async (searchParams, { rejectWithValue}) => {
    try { 
      const { data } = await api.post("employee/find-home-jobs", searchParams);
      return data?.jobs
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Set Job Bookmarked:
export const setJobBookMarked = createAsyncThunk(
  "employee/setJobBookMarked",
  async (id, {rejectWithValue}) => {
    try {
      const { data } = await api.post(`employee/bookmark-job/${id}`);
      toast.success(data?.message);
      return;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Set Job Applied:
export const setJobApplied = createAsyncThunk(
  "employee/setJobApplied",
  async (id, {rejectWithValue}) => {
    try {
      const { data } = await api.post(`employee/apply-job/${id}`);
      toast.success(data?.message);
      return;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Applied Jobs:
export const getAppliedJobs = createAsyncThunk(
  "employee/getAppliedJobs",
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await api.get("employee/applied-jobs");
      console.log(data?.appliedJobs);
      return data?.appliedJobs;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
)

// Action to Get BookMarked Jobs:
export const getBookMarkedJobs = createAsyncThunk(
  "employee/getBookMarkedJobs",
  async (_, {rejectWithValue}) => {
    try {
      const { data } = await api.get("employee/bookmarked-jobs");
      console.log(Array.isArray(data?.bookMarkedJobs));
      return data?.bookMarkedJobs;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
)

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
      // Handling With Education Action
      .addCase(uploadEducationInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadEducationInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadEducationInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling With Experience Action
      .addCase(uploadExperienceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadExperienceInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadExperienceInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling With Education Action
      .addCase(uploadProjectInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadProjectInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadProjectInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling With Certificate Action
      .addCase(uploadCertificateInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadCertificateInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadCertificateInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling With Preference Action
      .addCase(uploadPreferenceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadPreferenceInfos.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(uploadPreferenceInfos.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching All Jobs:
      .addCase(getAllJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.jobs = action.payload;
        state.error = null
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Filtered Jobs:
      .addCase(getFilteredJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.jobs = action.payload;
        state.error = null;
      })
      .addCase(getFilteredJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Selected Job:
      .addCase(getSelectedJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSelectedJob.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.selectedJob = action.payload;
        state.error = null;
      })
      .addCase(getSelectedJob.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Related Jobs:
      .addCase(getRelatedJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRelatedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.relatedJobs = action.payload;
        state.error = null;
      })
      .addCase(getRelatedJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching All Companies:
      .addCase(getAllCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(getAllCompanies.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Filtered Company:
      .addCase(getFilteredCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getFilteredCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(getFilteredCompanies.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Selected Company:
      .addCase(getSelectedCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSelectedCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.selectedCompany = action.payload;
        state.error = null;
      })
      .addCase(getSelectedCompany.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Fetching Company Open Jobs:
      .addCase(getCompanyOpenJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompanyOpenJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.openJobs = action.payload;
        state.error = null;
      })
      .addCase(getCompanyOpenJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      .addCase(getHomeFindJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getHomeFindJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.jobs = action.payload;
        state.error = null;
      })
      .addCase(getHomeFindJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling Applied Jobs:
      .addCase(getAppliedJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAppliedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.appliedJobs = action.payload;
        state.error = null;
      })
      .addCase(getAppliedJobs.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // Handling BookMarked Jobs:
      .addCase(getBookMarkedJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookMarkedJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.bookMarkedJobs = action.payload;
        state.error = null;
      })
      .addCase(getBookMarkedJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  },
});

export const { resetEmployeeSuccess } = employeeSlice.actions;
export default employeeSlice.reducer;
