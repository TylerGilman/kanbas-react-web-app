import React from "react";
import { Link } from "react-router-dom";
import { Course } from "./types";

interface DashboardProps {
  courses: Course[];
  showAllCourses: boolean;
  toggleCourses: () => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => Promise<void>;
}

export default function Dashboard({
  courses,
  showAllCourses,
  toggleCourses,
  updateEnrollment,
}: DashboardProps) {
  console.log("Dashboard Rendered with Courses:", courses);

  return (
    <div id="wd-dashboard" className="container my-4">
      <h1 id="wd-dashboard-title">
        Dashboard
        <button onClick={toggleCourses} className="float-end btn btn-primary">
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      </h1>

      <h2>
        {showAllCourses ? "All Courses" : "Enrolled Courses"} ({courses.length})
      </h2>
      {courses.length === 0 ? (
        <div className="alert alert-info text-center">
          {showAllCourses ? "No courses available" : "No enrolled courses found"}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link
                      to={`/Courses/${course._id}`}
                      className="text-decoration-none"
                    >
                      {course.name}
                    </Link>
                    {showAllCourses && (
                      <button
                        onClick={() =>
                          updateEnrollment(course._id, course.enrolled)
                        }
                        className={`btn ${
                          course.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                  </h5>
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
