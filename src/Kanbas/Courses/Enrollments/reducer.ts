import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
  showAllCourses: boolean;
  courses: any[];
}

const initialState: EnrollmentState = {
  enrollments: [],
  showAllCourses: false,
  courses: [],
};

const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    toggleShowAllCourses: (state) => {
      state.showAllCourses = !state.showAllCourses;
    },
    enrollInCourse: (state, action) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments.push(newEnrollment);
    },
    unenrollFromCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.userId &&
            enrollment.course === action.payload.courseId
          )
      );
    },
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
  },
});

export const {
  setEnrollments,
  toggleShowAllCourses,
  enrollInCourse,
  unenrollFromCourse,
  setCourses,
} = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
