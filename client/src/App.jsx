import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmployeeLayout from "./home/EmplyeeLayout";
import EmployerLayout from "./home/EmplyeeLayout";
import AdminLayout from "./admin/AdminLayout";
import { Signin, Signup, SmsForm } from "./components/auth";
import {
  Home,
  AuthForm,
  FindJobs,
  HomeCompanies,
  Saved,
  Notifications,
} from "./home/pages";
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
import { EmployerAuthForm } from "./employer/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This Router for Employee */}
        <Route element={<EmployeeLayout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/companies" element={<HomeCompanies />} />
          <Route path="/saved-jobs" element={<Saved />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>
        {/* Employee Router End */}

        {/* This Router for Employee Authentication */}
        <Route element={<AuthForm />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/sms-form" element={<SmsForm />} />
        </Route>
        {/* Employee Authentication Router End */}

        {/* This Router for Employer */}
        {/* Employer Router End */}

        {/* This Router for Employer Authentication */}
        <Route element={<EmployerAuthForm />}>
          <Route path="/employer/signin" element={<Signin />} />
          <Route path="/employer/signup" element={<Signup />} />
          <Route path="/employer/sms-form" element={<SmsForm />} />
        </Route>
        {/* Employer Authentication Router End */}

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
