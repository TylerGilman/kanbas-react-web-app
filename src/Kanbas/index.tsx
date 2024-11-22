import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import { setEnrollments } from "./Courses/Enrollments/reducer";

// Add Course type
interface Course {
  _id: string;
  name: string;
  description: string;
}

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
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({ 
    _id: "", 
    name: "", 
    description: "" 
  });
  
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = useCallback(async () => {
    try {
      if (currentUser) {
        // Fetch all courses for the all courses view
        const allCoursesData = await courseClient.fetchAllCourses();
        setAllCourses(allCoursesData);

        // Fetch enrolled courses using the existing endpoint
        const enrolledCourses = await userClient.findMyCourses();
        setCourses(enrolledCourses);

        // Create enrollment objects for Redux state
        const enrollmentObjects = enrolledCourses.map((course: Course) => ({
          _id: Date.now().toString(),
          user: currentUser._id,
          course: course._id
        }));
        dispatch(setEnrollments(enrollmentObjects));
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser, fetchCourses]);

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route 
              path="/Dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={allCourses}
                    enrolled_courses={courses}
                    course={course}
                    setCourse={setCourse}
                    fetchCourses={fetchCourses}
                    addNewCourse={async () => {
                      try {
                        await courseClient.createCourse(course);
                        await fetchCourses();  // Fetch updated courses immediately
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                    deleteCourse={async (courseId: string) => {
                      try {
                        await courseClient.deleteCourse(courseId);
                        await fetchCourses();  // Fetch updated courses immediately
                      } catch (error) {
                        console.error(error);
                      }
                    }}
                    updateCourse={async () => {
                      try {
                        await courseClient.updateCourse(course);
                        await fetchCourses();  // Fetch updated courses immediately
                      } catch (error) {
                        console.error(error);
                      }
                    }}
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
    </Session>
  );
}
