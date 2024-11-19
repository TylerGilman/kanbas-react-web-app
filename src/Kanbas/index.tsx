import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as db from "./Database"; 
import { useState } from "react";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";

function ProtectedCourseRoute({ courses }: { courses: any[] }) {
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
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Session>
    <div id="wd-kanbas">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3">
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
          <Route 
            path="/Courses/:cid/*" 
            element={<ProtectedCourseRoute courses={courses} />} 
          />
          <Route 
            path="/Calendar" 
            element={
              <ProtectedRoute>
                <h1>Calendar</h1>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/Inbox" 
            element={
              <ProtectedRoute>
                <h1>Inbox</h1>
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </div>
    </Session>
  );
}
