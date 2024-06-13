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

          {/* This Child Router for User Authentication */}
          <Route element={<AuthForm />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          {/* User Authentication Router End */}
        </Route>
        {/* User Router End */}

        {/* This Router for Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/statistics" element={<Statistics />} />
          <Route path="/admin/companies" element={<Companies />} />
          <Route path="/admin/jobs" element={<Jobs />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/companies/:id" element={<SelectedCompany />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
