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
      setCourse({ name: "", description: "" }); // Reset form
    } catch (error) {
      console.error(error);
    }
  };

  const addNewCourse = async () => {
    try {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
      setCourse({ name: "", description: "" }); // Reset form
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
    try {
      await courseClient.deleteCourse(courseId);
      setCourses(courses.filter((course) => course._id !== courseId));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
      <div id="wd-kanbas" className="container-fluid">
        <div className="row vh-100">
          {/* Sidebar Navigation */}
          <div className="col-2 col-md-1 bg-light border-end p-0 d-flex flex-column">
            <KanbasNavigation />
          </div>

          {/* Main Content */}
          <div className="col-10 col-md-11 p-3 overflow-auto">
            <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="/Account/*" element={<Account />} />
              <Route
                path="/Dashboard"
                element={
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
                }
              />
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
      </div>
    </Session>
  );
}
