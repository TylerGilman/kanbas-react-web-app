import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {

  const { pathname } = useLocation();
  const pathSplit = pathname.split('/');
  const currentCourseIndex = pathSplit.indexOf('Courses') + 1;
  const currentCourse = pathSplit[currentCourseIndex];
  const currentPage = pathSplit[currentCourseIndex + 1];
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((page) => (
      <Link to={`/Kanbas/Courses/${currentCourse}/${page}?cid=${currentCourse}`} id="wd-course-home-link" className={`list-group-item border border-0 ${page.includes(currentPage) ? "active" : "text-danger"}`}> {page}
      </Link>
      ))}
    </div>
);}


