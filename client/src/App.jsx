import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserLayout from "./home/UserLayout";
import AdminLayout from "./admin/AdminLayout";
import { Signin, Signup } from "./components/auth";
import { About, AuthForm, Contact, Home } from "./home/pages";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This Router for User */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* This Child Router for User Authentication */}
        <Route element={<AuthForm />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        {/* User Authentication Router End */}

        {/* User Router End */}

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
