import { NavLink, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID dynamically from the route

  return (
    <ul className="list-group">
      <li>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Home`}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Modules`}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Modules
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Assignments
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/Kanbas/Courses/${cid}/People`}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          People
        </NavLink>
      </li>
    </ul>
  );
}
