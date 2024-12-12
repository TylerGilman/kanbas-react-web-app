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
        <Courses courses={courses} />
    </ProtectedRoute>
  );
}

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(getEmptyCourse());
  const [showAllCourses, setShowAllCourses] = useState(false);

  const { currentUser } = useSelector((state: any) => state.accountReducer);

  function getEmptyCourse(): Course {
    return {
      _id: "",
      name: "",
      number: "",
      description: "",
      enrolled: false
    };
  }

const fetchCourses = async () => {
  try {
    if (currentUser) {
      const allCoursesData = await courseClient.fetchAllCourses();
      const enrolledCoursesData = await enrollClient.fetchEnrollments(currentUser._id);

      // Extract the numbers of enrolled courses
      const enrolledCourseNumbers = enrolledCoursesData.map((c: Course) => c.number);

      // Merge enrolled info into all courses
      const enrichedAllCourses = allCoursesData.map((course: Course) => ({
        ...course,
        enrolled: enrolledCourseNumbers.includes(course.number)
      }));

      // If you want to mark enrolled_courses array as enrolled=true as well
      const enrichedEnrolledCourses = enrolledCoursesData.map((course: Course) => ({
        ...course,
        enrolled: true
      }));

      setAllCourses(enrichedAllCourses);
      setCourses(enrichedEnrolledCourses);
    }
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

  const addNewCourse = async () => {
    try {
      const newCourse = await courseClient.createCourse(course);
      setCourses([...courses, newCourse]);
      setCourse(getEmptyCourse()); // Clear the form
    } catch (error) {
      console.error(error);
    }
  };

const updateCourse = async () => {
  try {
    const updatedCourse = await courseClient.updateCourse(course);
    
    // Update allCourses
    setAllCourses(prevAllCourses => 
      prevAllCourses.map(c => c.number === course.number ? 
        { ...c, name: course.name, description: course.description } : c)
    );
    
    // Update enrolled courses
    setCourses(prevCourses => 
      prevCourses.map(c => c.number === course.number ? 
        { ...c, name: course.name, description: course.description } : c)
    );
    
    // Clear the form
    setCourse(getEmptyCourse());
  } catch (error) {
    console.error("Error updating course:", error);
  }
};

  const setCourseForEdit = (courseToEdit: Course) => {
    setCourse({ ...courseToEdit });
  };

const handleEnrollmentToggle = async (courseNumber: string) => {
  try {
    const courseToToggle = allCourses.find(c => c.number === courseNumber);
    if (!courseToToggle) return;

    // Optimistically update UI
    if (courseToToggle.enrolled) {
      // Mark as unenrolled immediately
      setAllCourses(allCourses.map(c => c.number === courseNumber ? {...c, enrolled: false} : c));
    } else {
      // Mark as enrolled immediately
      setAllCourses(allCourses.map(c => c.number === courseNumber ? {...c, enrolled: true} : c));
    }

    if (courseToToggle.enrolled) {
      console.log("[handleEnrollmentToggle] Unenrolling from course:", courseNumber);
      await enrollClient.unenrollFromCourse(currentUser._id, courseNumber);
    } else {
      console.log("[handleEnrollmentToggle] Enrolling in course:", courseNumber);
      await enrollClient.enrollInCourse(currentUser._id, courseNumber);
    }

    console.log("[handleEnrollmentToggle] Refreshing courses after enrollment change.");
    await fetchCourses();
  } catch (error) {
    console.error("[handleEnrollmentToggle] Error toggling enrollment:", error);
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
                  addNewCourse={addNewCourse}
                  setCourseForEdit={setCourseForEdit}
                  fetchCourses={fetchCourses}
                  deleteCourse={(courseId: string) => 
                    courseClient.deleteCourse(courseId)
                      .then(() => fetchCourses())
                      .catch(error => console.error(error))
                  }
                  updateCourse={updateCourse}
                  showAllCourses={showAllCourses}
                  toggleCourses={() => setShowAllCourses(!showAllCourses)}
                  handleEnrollmentToggle={handleEnrollmentToggle}
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
