import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import { Course } from "./types";
import StudentProtectedRoute from "./Account/StudentProtectedRoute";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as courseClient from "./Courses/client";
import * as enrollClient from "./Courses/Enrollments/client";

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
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>({
    _id: new Date().getTime().toString(),
    name: "",
    number: "",
    description: "",
    enrolled: false
  });
  const [showAllCourses, setShowAllCourses] = useState(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchCourses = async () => {
    try {
      if (currentUser) {
        // Fetch all courses
        const allCoursesData = await courseClient.fetchAllCourses();
        setAllCourses(allCoursesData);

        // Filter for enrolled courses based on the enrolled flag
        const enrolledCoursesData = await enrollClient.fetchEnrollments(currentUser._id);
        setCourses(enrolledCoursesData);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchCourses();
    }
  }, [currentUser]);

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
                  courses={showAllCourses ? allCourses : courses}
                  enrolled_courses={courses}
                  course={course}
                  setCourse={setCourse}
                  fetchCourses={fetchCourses}
                  addNewCourse={() => 
                    courseClient.createCourse(course)
                      .then(() => fetchCourses())
                      .catch(error => console.error(error))
                  }
                  deleteCourse={(courseId: string) => 
                    courseClient.deleteCourse(courseId)
                      .then(() => fetchCourses())
                      .catch(error => console.error(error))
                  }
                  updateCourse={() => 
                    courseClient.updateCourse(course)
                      .then(() => fetchCourses())
                      .catch(error => console.error(error))
                  }
                  showAllCourses={showAllCourses}
                  toggleCourses={() => setShowAllCourses(!showAllCourses)}
                  handleEnrollmentToggle={async (courseId: string) => {
                    try {
                      const courseToToggle = allCourses.find(c => c._id === courseId);
                      if (courseToToggle) {
                        if (courseToToggle.enrolled) {
                          await enrollClient.unenrollFromCourse(currentUser._id, courseId);
                        } else {
                          await enrollClient.enrollInCourse(currentUser._id, courseId);
                        }
                        await fetchCourses(); // Refresh the courses after enrollment change
                      }
                    } catch (error) {
                      console.error("Error toggling enrollment:", error);
                    }
                  }}
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
