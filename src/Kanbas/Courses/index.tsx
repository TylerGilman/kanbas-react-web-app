import React from "react"; import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa6";
import People from "./People/index";


export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course: any) => course.number === cid);
  const { pathname } = useLocation();
  const split = pathname.split('/');
  const cpage = split[split.length - 1];
  const cname = split[split.length - 2];

  return (
    <div id="wd-courses">
      <h2 className="text-black">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {cname} &gt; { cpage }
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/People" element={<People />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
