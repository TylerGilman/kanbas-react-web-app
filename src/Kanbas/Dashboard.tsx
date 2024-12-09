import { Link } from "react-router-dom";
import FacultyProtectedContent from "./Account/FacultyProtectedContent";
import { useSelector } from "react-redux";
import { Course } from './types';

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: React.Dispatch<React.SetStateAction<Course>>;
  addNewCourse: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => Promise<void>;
}

export default function Dashboard({ 
  courses,
  course, 
  setCourse, 
  addNewCourse, 
  deleteCourse, 
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button 
          onClick={() => setEnrolling(!enrolling)} 
          className="float-end btn btn-primary"
        >
          {enrolling ? "Show My Courses" : "Show All Courses"}
        </button>
      </h1>

      <FacultyProtectedContent>
        <h5>New Course
          <button 
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
          <button 
            className="btn btn-warning float-end me-2"
            onClick={updateCourse}
            id="wd-update-course-click"
          >
            Update
          </button>
        </h5><br />
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
        <hr />
      </FacultyProtectedContent>

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.filter(course => course._id).map((course) => ( // Filter out any courses without _id
            <div key={course.number} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course.number}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {enrolling && (
                        <button 
                          onClick={(event) => {
                            event.preventDefault(); // Prevent navigation from Link
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    <FacultyProtectedContent>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                        id="wd-edit-course-click"
                      >
                        Edit
                      </button>
                    </FacultyProtectedContent>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
