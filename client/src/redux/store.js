import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import authReducer from "./authSlice.js";
import employeeInfoReducer from "./employeeInfoSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    userAuth: authReducer,
    employeeInfo: employeeInfoReducer,
  },
});

export default store;
