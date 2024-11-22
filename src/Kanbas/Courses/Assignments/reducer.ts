import { createSlice } from "@reduxjs/toolkit";


interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
}

interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: []
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === action.payload._id ? action.payload : assignment
      );
    }
  }
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
