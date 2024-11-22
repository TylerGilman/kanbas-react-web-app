import { Link, useLocation } from "react-router-dom";

interface CourseLink {
  id: string;
  label: string;
  path: string;
}

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const pathSplit = pathname.split('/');
  const currentCourseIndex = pathSplit.indexOf('Courses') + 1;
  const currentCourse = pathSplit[currentCourseIndex];
  const currentPage = pathSplit[currentCourseIndex + 1];

  const links: CourseLink[] = [
    { id: "home", label: "Home", path: "Home" },
    { id: "modules", label: "Modules", path: "Modules" },
    { id: "piazza", label: "Piazza", path: "Piazza" },
    { id: "zoom", label: "Zoom", path: "Zoom" },
    { id: "assignments", label: "Assignments", path: "Assignments" },
    { id: "quizzes", label: "Quizzes", path: "Quizzes" },
    { id: "grades", label: "Grades", path: "Grades" },
    { id: "people", label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(`/Kanbas/Courses/${currentCourse}/${link.path}`);
        return (
          <Link
            key={`course-nav-${link.id}`}
            id={`wd-course-${link.id}-link`}
            to={`/Kanbas/Courses/${currentCourse}/${link.path}?cid=${currentCourse}`}
            className={`list-group-item ${isActive ? "border-bottom-0 border-top-0 border-end-0 border-4 border-black fw-bold" : "border-0 text-danger fw-bold"}`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
