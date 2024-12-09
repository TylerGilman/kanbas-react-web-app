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
  number: string;
  description: string;
  enrolled: boolean;
}

function ProtectedCourseRoute({ courses }: { courses: Course[] }) {
  const { cid } = useParams();
  return (
    <ProtectedRoute>
        <Courses courses={courses} />
    </ProtectedRoute>
  );
}

export default function Kanbas() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const [course, setCourse] = useState<Course>({
    _id: "",
    name: "",
    description: "",
    enrolled: false
  });

 const findCoursesForUser = async () => {
   try {
     const courses = await userClient.findCoursesForUser(currentUser._id);
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };
  
 const fetchCourses = async () => {
   try {
     const allCourses = await courseClient.fetchAllCourses();
     const enrolledCourses = await userClient.findCoursesForUser(
       currentUser._id
     );
     const courses = allCourses.map((course: any) => {
       if (enrolledCourses.find((c: any) => c._id === course._id)) {
         return { ...course, enrolled: true };
       } else {
         return course;
       }
     });
     setCourses(courses);
   } catch (error) {
     console.error(error);
   }
 };


const updateCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (!course.name.trim() || !course.description.trim()) {
    alert("Name and description are required");
    return;
  }
  try {
    await courseClient.updateCourse(course);
    await fetchCourses();
  } catch (error) {
    console.error(error);
    alert("Failed to update course");
  }
};

const deleteCourse = async (courseId: string) => {
  if (!courseId) return;
  try {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((c) => c._id !== courseId));
  } catch (error) {
    console.error(error);
  }
};

const addNewCourse = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  try {
    const newCourse = await courseClient.createCourse({
      name: course.name,
      description: course.description,
      // Remove spread operator and _id to avoid undefined id
    });
    setCourses([...courses, {...newCourse, enrolled: false}]);
    setCourse({ _id: "", name: "", description: "", enrolled: false }); // Reset form
  } catch (error) {
    console.error(error);
  }
};

const updateEnrollment = async (courseId: string, enrolled: boolean) => {
  try {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    
    // If we're showing all courses, update the enrolled status
    if (enrolling) {
      setCourses(
        courses.map((course) => {
          if (course._id === courseId) {
            return { ...course, enrolled };
          }
          return course;
        })
      );
    } else {
      // If we're showing only enrolled courses, remove unenrolled courses
      if (!enrolled) {
        setCourses(courses.filter(course => course._id !== courseId));
      }
    }
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  if (currentUser) {
    if (enrolling) {
      // Show all courses when enrolling is true
      fetchCourses();
    } else {
      // Show only enrolled courses when enrolling is false
      findCoursesForUser();
    }
  }
}, [currentUser, enrolling]);

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
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addNewCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/Courses/:cid/*" element={<ProtectedCourseRoute courses={courses} />} />
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
