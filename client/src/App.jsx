import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import EmployeeLayout from "./pages/job-portal/employee/EmplyeeLayout";
import EmployerLayout from "./pages/job-portal/employer/EmployerLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import { Signin, Signup, SmsForm } from "./components/auth";
import {
  Home,
  FindJobs,
  HomeCompanies,
  Saved,
  Notifications,
  MultiInfoForm,
} from "./pages/job-portal/employee/pages";
import {
  Companies,
  Jobs,
  Reports,
  SelectedCompany,
  SelectedJob,
  SelectedUser,
  Settings,
  Statistics,
  Users,
} from "./pages/admin/pages";
import {
  AllApplicants,
  CompanyProfile,
  EmployerDashboard,
  EmployerHome,
  EmployerInformation,
  ManageJobs,
  Messages,
  Notification,
  PostJobs,
  ShortListed,
} from "./pages/job-portal/employer/pages";
import { AuthForm } from "./pages/user";

import { InfoForm, LandingPage, RoleSelection } from "./components/user";
import { isExpireToken } from "./utils/privateFuncs";
import { PrivateRoutes } from "./components";
import DashboardLayout from "./pages/job-portal/employer/DashboardLayout";
import StudyAbroadLayout from "./pages/study-abroad/StudyAbroadLayout";
import { HomePage } from "./pages/study-abroad/pages";

function App() {
  const dispatch = useDispatch();
  const local = localStorage.getItem("USER_LOCAL");
  const [userToken, setUserToken] = useState("");
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    if (local) {
      const { token, role } = JSON.parse(local);
      if (token || role) {
        setUserToken(token || "");
        setUserRole(role || "");
      }
    }
  }, [local]);

  useEffect(() => {
    if (userToken) {
      isExpireToken(userToken, dispatch);
    }
  }, [userToken]);

  return (
    <BrowserRouter>
      {/* <PrivateRoutes />; */}
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* This Router for User Authentication */}
        <Route path="/auth" element={<AuthForm />}>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="sms-form" element={<SmsForm />} />
          <Route path="info-form" element={<InfoForm />} />
          <Route path="role-selection" element={<RoleSelection />} />
        </Route>
        {/* User Authentication Router End */}

        {/* This Router for Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/administrator/statistics" element={<Statistics />} />
          <Route path="/administrator/companies" element={<Companies />} />
          <Route path="/administrator/jobs" element={<Jobs />} />
          <Route path="/administrator/users" element={<Users />} />
          <Route path="/administrator/reports" element={<Reports />} />
          <Route path="/administrator/settings" element={<Settings />} />
          <Route
            path="/administrator/companies/:id"
            element={<SelectedCompany />}
          />
          <Route path="/administrator/jobs/:id" element={<SelectedJob />} />
          <Route path="/administrator/users/:id" element={<SelectedUser />} />
        </Route>
        {/* Admin Router End */}

        {/* Job Portal App Start */}

        {/* This Router for Job Portal Employee */}
        <Route path="/job-portal/employee" element={<EmployeeLayout />}>
          <Route index element={<Home />} />
          <Route path="find-jobs" element={<FindJobs />} />
          <Route path="companies" element={<HomeCompanies />} />
          <Route path="saved-jobs" element={<Saved />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="information-form" element={<MultiInfoForm />} />
        </Route>
        {/* Job Portal Employee Router End */}

        {/* This Router for Job Portal Employer */}
        <Route path="/job-portal/employer" element={<EmployerLayout />}>
          <Route index element={<EmployerHome />} />
          <Route path="information-form" element={<EmployerInformation />} />
        </Route>

        {/* Router for Job Portal Employer Dashboard */}
        <Route
          path="/job-portal/employer/dashboard"
          element={<DashboardLayout />}
        >
          <Route index element={<EmployerDashboard />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="post-job" element={<PostJobs />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="all-applicants" element={<AllApplicants />} />
          <Route path="shortlisted-resumes" element={<ShortListed />} />
          <Route path="messages" element={<Messages />} />
          <Route path="notifications" element={<Notification />} />
        </Route>
        {/* Job Portal Employer Dashboard End */}

        {/* Job Portal Employer Router End */}

        {/* Job Portal App End */}

        {/* Study Abroad Start  */}
        <Route path="study-abroad" element={<StudyAbroadLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* Study Abroad End  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
