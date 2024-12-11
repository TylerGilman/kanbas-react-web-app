import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";  // Changed this import
import { Course } from "./types";
import FacultyProtectedContent from "./Account/FacultyProtectedContent";

interface DashboardProps {
  courses: Course[];
  enrolled_courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  fetchCourses: () => Promise<void>;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
  showAllCourses: boolean;
  toggleCourses: () => void;
  handleEnrollmentToggle: (courseId: string) => Promise<void>;
}

export default function Dashboard({ 
  courses,
  enrolled_courses,
  course, 
  setCourse, 
  fetchCourses,
  addNewCourse, 
  deleteCourse, 
  updateCourse,
  showAllCourses,
  toggleCourses,
  handleEnrollmentToggle
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard" className="container my-4">
      <h1 id="wd-dashboard-title">
        Dashboard
          <button 
            onClick={toggleCourses} 
            className="btn btn-primary float-end"
          >
            {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
          </button>
      </h1>

      <FacultyProtectedContent>
        <div className="mb-4">
          <h5>New Course
            <button className="btn btn-primary float-end" onClick={addNewCourse}>Add</button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>Update</button>
          </h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </div>
      </FacultyProtectedContent>
      <h2>
        {showAllCourses ? "All Courses" : "Enrolled Courses"} 
        ({(showAllCourses ? courses : enrolled_courses).length})
      </h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {(showAllCourses ? courses : enrolled_courses).map((course: Course) => (
          <div key={course._id} className="col">
            <div className="card h-100">
              <img 
                src="/images/reactjs.jpg" 
                className="card-img-top" 
                alt={course.name}
                style={{ height: "160px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <Link 
                    to={`/Kanbas/Courses/${course.number}/Home`} 
                    className="text-decoration-none"
                  >
                    {course.name}
                  </Link>
                </h5>
                <p className="card-text">{course.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <Link 
                    to={`/Kanbas/Courses/${course.number}/Home`} 
                    className="btn btn-primary"
                  >
                    Go to Course
                  </Link>

                  {currentUser?._id && showAllCourses && (
                    <button
                      onClick={() => handleEnrollmentToggle(course.number)} 
                      className={`btn ${course.enrolled ? 'btn-danger' : 'btn-success'}`}
                    >
                      {course.enrolled ? 'Unenroll' : 'Enroll'}
                    </button>
                  )}

                  <FacultyProtectedContent>
                    <div className="btn-group">
                      <button
                        onClick={() => setCourse(course)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          console.log("[Dashboard] Delete button clicked for course:", course);
                          deleteCourse(course.number)
                            .then(() => {
                              console.log("[Dashboard] Delete successful, refetching courses...");
                              return fetchCourses(); // Ensure this function updates state
                            })
                            .catch(err => console.error("[Dashboard] Error deleting course:", err));
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </FacultyProtectedContent>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
