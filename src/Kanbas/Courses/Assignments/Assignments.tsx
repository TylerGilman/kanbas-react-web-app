import { BsGripVertical } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";

import * as db from "../../Database";
import { useLocation, Link } from 'react-router-dom';
import "../../styles.css";

interface Assignment {
  _id: string;
  title: string;
  course: string;
}

export default function AssignmentsScreen() {
  const { pathname } = useLocation();
  console.log(pathname);
  const splitPath = pathname.split('/');
  const courseId = splitPath[splitPath.length - 2]
  // Find assignments for the current course
  const courseAssignments = db.assignments.filter(
    course => course.course === courseId
  ) || [];

  return (
    <div id="wd-assignments" className="container">
      <div className="flex-row row align-items-right">
        <div className="m-2 py-1 col-4 position-relative">
          <input 
            id="wd-search-assignment" 
            className="form-control pe-5 py-2" 
            placeholder="Search for Assignments" 
          />
          <FaMagnifyingGlass className="position-absolute top-50 end-0 translate-middle-y me-3"/>
        </div>
        <div className="col-3" />
        <button 
          id="wd-add-assignment-group" 
          className="btn btn-secondary rounded-1 col-2 m-1 float-end py-2 ml-auto"
        >
          + Group
        </button>
        <button 
          id="wd-add-assignment" 
          className="btn btn-danger rounded-1 col-2 m-1 float-end py-2"
        >
          + Assignment
        </button>
      </div>

      <div className="bg-secondary p-3 ps-2">
        <h3 id="wd-assignments-title">
          <BsGripVertical />
          <span>ASSIGNMENTS</span> 
          <div className="float-end">
            <span>40% of Total</span>
            <button className="btn btn-transparent">+</button>
            <BsThreeDotsVertical className="m-2" />
          </div>
        </h3>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {courseAssignments.map((assignment: Assignment) => (
          <div key={assignment._id} className="border-5 border-start border-success">
            <li className="wd-assignment-list-item wd-lesson list-group-item p-0 fs-5">
              <BsGripVertical />
              <FiBookOpen className="text-success m-2"/>
              <Link 
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="wd-assignment-link text-black"
              >
                {assignment.title}
              </Link>
              <br/>
              <span className="text-danger mx-2">
                Multiple Modules
              </span> |
              <span className="ms-2">
                <b>Due</b> No due date
              </span> |
              <span className="ms-2">100 pts</span>
              <LessonControlButtons />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
