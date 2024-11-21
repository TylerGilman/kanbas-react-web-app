import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import Dashboard, { Course } from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

function ProtectedCourseRoute({ courses }: { courses: Course[] }) {
  const { cid } = useParams();
  return (
    <ProtectedRoute>
      <StudentProtectedRoute courseId={cid || ""}>
        <Courses courses={courses} />
      </StudentProtectedRoute>
    </ProtectedRoute>
  );
}

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({
    name: "",
    description: ""
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const updateCourse = async () => {
    try {
      const updatedCourse = await courseClient.updateCourse(course);
      setCourses(courses.map(c => 
        c._id === course._id ? updatedCourse : c
      ));
      // Reset form
      setCourse({ name: "", description: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
      // Reset form
      setCourse({ name: "", description: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard 
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedCourseRoute courses={courses} />
            } />
            <Route path="/Calendar" element={
              <ProtectedRoute>
                <h1>Calendar</h1>
              </ProtectedRoute>
            } />
            <Route path="/Inbox" element={
              <ProtectedRoute>
                <h1>Inbox</h1>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
