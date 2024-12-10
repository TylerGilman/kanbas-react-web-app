import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import Account from "./Account";
import Signin from "./Account/Signin";
import Signup from "./Account/Signup";
import { Course } from "./types";
import * as courseClient from "./Courses/client";
import * as enrollClient from "./Courses/Enrollments/client";

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [displayedCourses, setDisplayedCourses] = useState<Course[]>([]);
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);

  // Fetch all courses once on mount
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const courses = await courseClient.fetchAllCourses();
        console.log("All Courses Fetched:", courses);
        setAllCourses(courses);

        if (currentUser?._id) {
          const enrolledCourses = await enrollClient.fetchEnrollments(currentUser._id);

          setDisplayedCourses(enrolledCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchAllCourses();
  }, [currentUser]);

  // Toggle between showing all courses and only enrolled courses
  const toggleCoursesView = async () => {
    if (showAllCourses) {
      console.log("Switching to Enrolled Courses");
      const enrolledCourses = await enrollClient.fetchEnrollments(currentUser._id);
      setDisplayedCourses(enrolledCourses);
    } else {
      console.log("Switching to All Courses");
      setDisplayedCourses(allCourses);
    }
    setShowAllCourses(!showAllCourses);
  };

  // Update enrollment status
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    try {
      if (!currentUser?._id) {
        console.error("User is not logged in.");
        return;
      }

      if (enrolled) {
        console.log(`Unenrolling from course ${courseId}`);
        await enrollClient.unenrollFromCourse(currentUser._id, courseId);
      } else {
        console.log(`Enrolling in course ${courseId}`);
        await enrollClient.enrollInCourse(currentUser._id, courseId);
      }

      // Update courses locally
      const updatedCourses = allCourses.map((course) =>
        course._id === courseId ? { ...course, enrolled: !enrolled } : course
      );
      setAllCourses(updatedCourses);

      // Update displayed courses based on current view
      const enrolledCourses = updatedCourses.filter((course: Course) => course.enrolled);
      setDisplayedCourses(showAllCourses ? updatedCourses : enrolledCourses);
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  return (
    <Session>
      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset">
          <Routes>
            <Route path="/" element={<Navigate to="/Account/Login" />} />
            <Route path="/Account/Login" element={<Signin />} />
            <Route path="/Account/Register" element={<Signup />} />
            <Route
              path="/Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={displayedCourses}
                    showAllCourses={showAllCourses}
                    toggleCourses={toggleCoursesView}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/Account/*" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
