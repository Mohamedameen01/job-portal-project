import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { toast } from "react-toastify";

const INITIAL_STATE = {
  loading: false,
  success: false,
  employeeInfo: null,
  jobs: null,
  profile: null,
  education: null,
  certification: null,
  experience: null,
  project: null,
  preference: null,
  selectedJob: null,
  relatedJobs: null,
  companies: null,
  selectedCompany: null,
  openJobs: null,
  bookMarkedJobs: null,
  appliedJobs: null,
  recentApplied: null,
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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/all-jobs");
      return data?.jobs;
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
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/filter-jobs", { searchParams });
      return data?.jobs;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Selected Job:
export const getSelectedJob = createAsyncThunk(
  "employee/getSelectedJob",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`employee/job/${id}`);
      return data?.job;
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
  async (id, { rejectWithValue }) => {
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
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/all-companies");
      return data?.companies;
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
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/filter-companies", {
        searchParams,
      });
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
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`employee/company/${id}`);
      return data?.company;
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
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`employee/company/open-jobs/${id}`);
      return data?.openJobs;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

export const getHomeFindJobs = createAsyncThunk(
  "employee/getHomeFindJobs",
  async (searchParams, { rejectWithValue }) => {
    try {
      const { data } = await api.post("employee/find-home-jobs", searchParams);
      return data?.jobs;
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
  async (id, { rejectWithValue }) => {
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
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.post(`employee/apply-job/${id}`);
      toast.success(data?.message);
      return;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get Applied Jobs:
export const getAppliedJobs = createAsyncThunk(
  "employee/getAppliedJobs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/applied-jobs");
      return data?.appliedJobs;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action to Get BookMarked Jobs:
export const getBookMarkedJobs = createAsyncThunk(
  "employee/getBookMarkedJobs",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/bookmarked-jobs");
      return data?.bookMarkedJobs;
    } catch (error) {
      console.log(error);
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Get Recent Applied Jobs:
export const getRecentApplied = createAsyncThunk(
  "employee/getRecentApplied",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/recent-applied");
      return data?.appliedJobs;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Get Profile Infos:
export const getProfileInfos = createAsyncThunk(
  "employee/getProfileInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/profile-infos");
      return data?.profile;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Get Education Infos:
export const getEducationInfos = createAsyncThunk(
  "employee/getEducationInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/education-infos");
      return data?.education;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Get Certificate Infos:
export const getCertificateInfos = createAsyncThunk(
  "employee/getCertificateInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/certification-infos");
      return data?.certification;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Get Experience Infos:
export const getExperienceInfos = createAsyncThunk(
  "employee/getExperienceInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/experience-infos");
      return data?.experience;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);
// Action To Get Project Infos:
export const getProjectInfos = createAsyncThunk(
  "employee/getProjectInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/project-infos");
      return data?.project;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);
// Action To Get Preference Infos:
export const getPreferenceInfos = createAsyncThunk(
  "employee/getPreferenceInfos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("employee/preference-infos");
      return data?.preference;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Profile Infos:
export const updateProfileInfos = createAsyncThunk(
  "employee/updateProfileInfos",
  async (infos, { rejectWithValue }) => {
    try {
      const { data } = await api.put("employee/profile-infos", infos);
      toast.success(data?.message);
      return data?.profile;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Education Infos:
export const updateEducationInfos = createAsyncThunk(
  "employee/updateEducationInfos",
  async (values, { rejectWithValue }) => {
    try {
      const { id, infos } = values;
      const { data } = await api.put(`employee/education-infos/${id}`, infos);

      toast.success(data?.message);
      return data?.education;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Certification Infos:
export const updateCertificationInfos = createAsyncThunk(
  "employee/updateCertificationInfos",
  async (values, { rejectWithValue }) => {
    try {
      const { id, infos } = values;

      const { data } = await api.put(
        `employee/certification-infos/${id}`,
        infos
      );
      toast.success(data?.message);

      return data?.certification;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Experience Infos:
export const updateExperienceInfos = createAsyncThunk(
  "employee/updateExperienceInfos",
  async (values, { rejectWithValue }) => {
    try {
      const { id, infos } = values;
      const { data } = await api.put(`employee/experience-infos/${id}`, infos);

      toast.success(data?.message);
      return data?.experience;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Project Infos:
export const updateProjectInfos = createAsyncThunk(
  "employee/updateProjectInfos",
  async (values, { rejectWithValue }) => {
    try {
      const { id, infos } = values;
      const { data } = await api.put(`employee/project-infos/${id}`, infos);

      toast.success(data?.message);
      return data?.project;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Update Preference Infos:
export const updatePreferenceInfos = createAsyncThunk(
  "employee/updatePreferenceInfos",
  async (values, { rejectWithValue }) => {
    try {
      const { id, infos } = values;
      const { data } = await api.put(`employee/preference-infos/${id}`, infos);

      toast.success(data?.message);
      return data?.preference;
    } catch (error) {
      const msgError = error?.response?.data?.message || "Something went wrong";
      toast.error(msgError);
      return rejectWithValue(msgError);
    }
  }
);

// Action To Change Password:
export const changePassword = createAsyncThunk(
  "employee/changePassword",
  async (infos, { rejectWithValue}) => {
    try {
      const { data } = await api.post("employee/change-password", infos);
      toast.success(data?.message);
      return;
    } catch (error) {
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
        state.error = null;
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

      // Handling Recent Applied:
      .addCase(getRecentApplied.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRecentApplied.fulfilled, (state, action) => {
        state.loading = false;
        state.recentApplied = action.payload;
        state.error = null;
      })
      .addCase(getRecentApplied.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Profile Infos:
      .addCase(getProfileInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfileInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(getProfileInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Education Infos:
      .addCase(getEducationInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEducationInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.education = action.payload;
        state.error = null;
      })
      .addCase(getEducationInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Experience Infos:
      .addCase(getExperienceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getExperienceInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action.payload;
        state.error = null;
      })
      .addCase(getExperienceInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Certification Infos:
      .addCase(getCertificateInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCertificateInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.certification = action.payload;
        state.error = null;
      })
      .addCase(getCertificateInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Project Infos:
      .addCase(getProjectInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
        state.error = null;
      })
      .addCase(getProjectInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Preference Infos:
      .addCase(getPreferenceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPreferenceInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.preference = action.payload;
        state.error = null;
      })
      .addCase(getPreferenceInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Profile Infos:
      .addCase(updateProfileInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfileInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.error = null;
      })
      .addCase(updateProfileInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Education Infos:
      .addCase(updateEducationInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateEducationInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.education = action.payload;
        state.error = null;
      })
      .addCase(updateEducationInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Experience Infos:
      .addCase(updateExperienceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateExperienceInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.experience = action.payload;
        state.error = null;
      })
      .addCase(updateExperienceInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Certification Infos:
      .addCase(updateCertificationInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCertificationInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.certification = action.payload;
        state.error = null;
      })
      .addCase(updateCertificationInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Project Infos:
      .addCase(updateProjectInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProjectInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.project = action.payload;
        state.error = null;
      })
      .addCase(updateProjectInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handling Updating Preference Infos:
      .addCase(updatePreferenceInfos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePreferenceInfos.fulfilled, (state, action) => {
        state.loading = false;
        state.preference = action.payload;
        state.error = null;
      })
      .addCase(updatePreferenceInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetEmployeeSuccess } = employeeSlice.actions;
export default employeeSlice.reducer;
