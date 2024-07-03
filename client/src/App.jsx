import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmployeeLayout from "./employee/EmplyeeLayout";
import EmployerLayout from "./employer/EmployerLayout";
import AdminLayout from "./admin/AdminLayout";
import {
  InfoForm,
  RoleSelection,
  Signin,
  Signup,
  SmsForm,
} from "./components/auth";
import {
  Home,
  FindJobs,
  HomeCompanies,
  Saved,
  Notifications,
} from "./employee/pages";
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
} from "./admin/pages";
import { EmployerHome } from "./employer/pages";
import { AuthForm } from "./user";

function App() {
  // const isAuthenticated = localStorage.getItem("USER_LOCAL");
  return (
    <BrowserRouter>
      <Routes>
        {/* This Router for User Authentication */}
        <Route element={<AuthForm />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sms-form" element={<SmsForm />} />
          <Route path="/info-form" element={<InfoForm />} />
          <Route path="/role-selection" element={<RoleSelection />} />
        </Route>
        {/* User Authentication Router End */}

        {/* This Router for Employee */}
        <Route element={<EmployeeLayout />}>
          <Route path="/employee" index element={<Home />} />
          <Route path="/employee/find-jobs" element={<FindJobs />} />
          <Route path="/employee/companies" element={<HomeCompanies />} />
          <Route path="/employee/saved-jobs" element={<Saved />} />
          <Route path="/employee/notifications" element={<Notifications />} />
        </Route>
        {/* Employee Router End */}

        {/* This Router for Employer */}
        <Route element={<EmployerLayout />}>
          <Route path="/employer" element={<EmployerHome />} />
        </Route>
        {/* Employer Router End */}

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
