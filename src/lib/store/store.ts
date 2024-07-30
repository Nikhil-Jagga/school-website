import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../slices/studentSlice";
import schoolInfoReducer from "../slices/schoolInfoSlice";
import aboutReducer from "../slices/aboutSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
    schoolInfo: schoolInfoReducer,
    about: aboutReducer,
  },
});
