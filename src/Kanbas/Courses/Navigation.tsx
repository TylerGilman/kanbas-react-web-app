import { NavLink, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // Get the course ID dynamically from the route

  const baseLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    padding: '0.5rem 0.2rem'
  };
  const activeLinkStyle: React.CSSProperties = {
    ...baseLinkStyle,
    fontWeight: 'bold',
    color: 'black',
    borderRight: '3px solid black'
  };
  const containerStyle: React.CSSProperties = {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  };
  const listItemStyle: React.CSSProperties = {
    marginBottom: '0.5rem'
  };

  return (
    <ul style={containerStyle}>
      <li style={listItemStyle}>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Home`}
          style={({ isActive }) => isActive ? activeLinkStyle : baseLinkStyle}
        >
          Home
        </NavLink>
      </li>
      <li style={listItemStyle}>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Modules`}
          style={({ isActive }) => isActive ? activeLinkStyle : baseLinkStyle}
        >
          Modules
        </NavLink>
      </li>
      <li style={listItemStyle}>
        <NavLink
          to={`/Kanbas/Courses/${cid}/Assignments`}
          style={({ isActive }) => isActive ? activeLinkStyle : baseLinkStyle}
        >
          Assignments
        </NavLink>
      </li>
      <li style={listItemStyle}>
        <NavLink
          to={`/Kanbas/Courses/${cid}/People`}
          style={({ isActive }) => isActive ? activeLinkStyle : baseLinkStyle}
        >
          People
        </NavLink>
      </li>
    </ul>
  );
}
