import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./Courses/Enrollments/reducer";
import accountReducer from "./Account/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
    enrollmentReducer,
    accountReducer, // Handles user-related data
  },
});

export default store;
