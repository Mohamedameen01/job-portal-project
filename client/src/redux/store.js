import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice.js";
import employerReducer from "./employerSlice.js";

const store = configureStore({
  reducer: {
    employeeAuth: employeeReducer,
    employerAuth: employerReducer,
  },
});

export default store;
