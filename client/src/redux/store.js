import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice.js";
import authReducer from "./authSlice.js";
import employeeInfoReducer from "./employeeInfoSlice.js";
import chatReducer from "./chatSlice.js";
import employerReducer from "./employerSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    userAuth: authReducer,
    employeeInfo: employeeInfoReducer,
    chat: chatReducer,
    employer: employerReducer,
  },
});

export default store;
