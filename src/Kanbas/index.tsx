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
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";

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
    number: "",
    description: "",
    enrolled: false
  });

const findCoursesForUser = useCallback(async () => {
  if (!currentUser) return;
  try {
    const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
    // Transform courses to include complete course data
    const transformedCourses = enrolledCourses.map((course: Course) => ({
      ...course,
      name: course.name,    // Ensure name is preserved
      description: course.description,  // Ensure description is preserved
      enrolled: true 
    }));
    setCourses(transformedCourses);
  } catch (error) {
    console.error(error);
  }
}, [currentUser?._id]);

const fetchCourses = useCallback(async () => {
  if (!currentUser) return;
  try {
    const allCourses = await courseClient.fetchAllCourses();
    const enrolledCourses = await userClient.findCoursesForUser(currentUser._id);
    const courses = allCourses.map((course: Course) => ({
      ...course, // Preserve all course data
      enrolled: !!enrolledCourses.find((c: Course) => c.number === course.number)
    }));
    setCourses(courses);
  } catch (error) {
    console.error(error);
  }
}, [currentUser?._id]);

useEffect(() => {
  if (currentUser) {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }
}, [currentUser, enrolling, fetchCourses, findCoursesForUser]);


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
    setCourses(courses.filter((c) => c.number !== courseId));
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
setCourse({ 
  _id: "", 
  name: "", 
  number: "",
  description: "", 
  enrolled: false 
});
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
    
    // Always update the enrolled status of the course
    setCourses(
      courses.map((course) => {
        if (course.number === courseId) {
          return { ...course, enrolled };
        }
        return course;
      })
    );

    // If we're not showing all courses, refetch the enrolled courses
    if (!enrolling) {
      await findCoursesForUser();
    }
  } catch (error) {
    console.error(error);
  }
};

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
