import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      console.log("Adding assignment in reducer:", action.payload);
      console.log("Current state:", state.assignments);
      state.assignments.push(action.payload);
      console.log("New state:", state.assignments);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) => 
        assignment._id === action.payload._id ? action.payload : assignment
      );
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    }
  }
});

export const { addAssignment, updateAssignment, deleteAssignment } = 
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
