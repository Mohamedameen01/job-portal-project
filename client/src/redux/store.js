import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice.js";
import employeeInfoReducer from "./employeeInfoSlice.js";

const store = configureStore({
  reducer: {
    userAuth: authReducer,
    employeeInfo: employeeInfoReducer,
  },
});

export default store;
