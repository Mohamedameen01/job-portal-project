import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  pageIndex: 1,
  pageTitle: [
    "education details",
    "work experience",
    "professional details",
    "preferences",
  ],
};

const employeeInfoSlice = createSlice({
  name: "employeeInfo",
  initialState: INITIAL_STATE,
  reducers: {
    setNextPageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
    setPrevPageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const { setNextPageIndex, setPrevPageIndex } = employeeInfoSlice.actions;
export default employeeInfoSlice.reducer;
