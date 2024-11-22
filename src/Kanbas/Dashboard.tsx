import { Link } from "react-router-dom";
import FacultyProtectedContent from "./Account/FacultyProtectedContent";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleShowAllCourses,
  enrollInCourse as enrollInRedux,
  unenrollFromCourse as unenrollFromRedux,
  setEnrollments,
} from "./Courses/Enrollments/reducer";
import {
  enrollInCourse as enrollInApi,
  unenrollFromCourse as unenrollFromApi,
  fetchEnrollments,
} from "./Courses/Enrollments/client";


export interface Course {
  _id: string;
  name: string;
  description: string;
}

interface DashboardProps {
  courses: Course[];
  enrolled_courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  fetchCourses: () => Promise<void>;
  addNewCourse: () => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: () => Promise<void>;
}

export default function Dashboard({ 
  courses,
  enrolled_courses,
  course, 
  setCourse, 
  fetchCourses,
  addNewCourse, 
  deleteCourse, 
  updateCourse 
}: DashboardProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { showAllCourses } = useSelector((state: any) => state.enrollmentReducer);

  const displayedCourses = showAllCourses ? courses : enrolled_courses;

const handleEnrollmentToggle = async (courseId: string) => {
  try {
    if (enrolled_courses.some(course => course._id === courseId)) {
      await unenrollFromApi(currentUser._id, courseId);
      dispatch(unenrollFromRedux({ userId: currentUser._id, courseId }));
    } else {
      await enrollInApi(currentUser._id, courseId);
      dispatch(enrollInRedux({ userId: currentUser._id, courseId }));
    }
    // Fetch updated courses immediately after enrollment change
    await fetchCourses();
  } catch (error) {
    console.error("Error handling enrollment toggle:", error);
  }
};

  const StudentEnrollmentButton = () => {
    if (currentUser?.role !== "STUDENT") return null;
    return (
      <button 
        className="btn btn-primary float-end mb-2"
        onClick={() => dispatch(toggleShowAllCourses())}
      >
        {showAllCourses ? "My Courses" : "All Courses"}
      </button>
    );
  };

  const EnrollmentActionButton = ({ courseId }: { courseId: string }) => {
    if (currentUser?.role !== "STUDENT") return null;
    
    const enrolled = enrolled_courses.some(course => course._id === courseId);
    return (
      <button
        className={`btn ${enrolled ? 'btn-danger' : 'btn-success'} float-end ms-2`}
        onClick={(e) => {
          e.preventDefault();
          handleEnrollmentToggle(courseId);
        }}
      >
        {enrolled ? 'Unenroll' : 'Enroll'}
      </button>
    );
  };

  return (
    <div id="wd-dashboard" >
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <StudentEnrollmentButton />

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

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {displayedCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src="/images/reactjs.jpg" width="100%" height={160} alt="Course" />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    <button className="btn btn-primary">Go</button>
                    <EnrollmentActionButton courseId={course._id} />
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
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
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
