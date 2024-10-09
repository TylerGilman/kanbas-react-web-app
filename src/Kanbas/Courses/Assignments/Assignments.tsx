import { BsGripVertical } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "../../styles.css";
export default function AssignmentsScreen() {
  return (
    <div id="wd-assignments container">
      <div className="flex-row row align-items-right">
        <div className="m-2 py-1 col-4">
          <input id="wd-search-assignment" className="form-control pe-5 py-2" placeholder="   Search for Assignments" />
          <FaMagnifyingGlass className="fa fa-search position-absolute top-50 left-20 translate-middle-y me-3"/>
        </div>
        <div className="col-3"></div>
        <button id="wd-add-assignment-group" className="btn btn-secondary rounded-1 col-2 m-1 float-end py-2 ml-auto">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-danger rounded-1 col-2 m-1 float-end py-2">+ Assignment</button>
      </div>
      <div className="bg-secondary p-3 ps-2">
      <h3 id="wd-assignments-title">
        <BsGripVertical />
        <span>ASSIGNMENTS</span> 
            <div className="float-end">
              <span>40% of Total</span> <button>+</button>
              <BsThreeDotsVertical className="m-2" />
            </div>
      </h3>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0 ">
        <div className="border-5 border-left border-success">
        <li className="wd-assignment-list-item wd-lesson list-group-item p-0 fs-5 border-gray border-5-left">
            <BsGripVertical />
            <FiBookOpen className="text-success m-2"/>
          <a className="wd-assignment-link text-black"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a><br/>
          <span className="text-danger mx-2"> Multiple Modules </span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
          <LessonControlButtons />
        </li>
        <li className="wd-assignment-list-item wd-lesson list-group-item p-0 fs-5 border-gray">
            <BsGripVertical />
            <FiBookOpen className="text-success m-2"/>
          <a className="wd-assignment-link text-black"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a><br/>
          <span className="text-danger mx-2"> Multiple Modules </span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
          <LessonControlButtons />
        </li>
        <li className="wd-assignment-list-item wd-lesson list-group-item p-0 mb-5 fs-5 border-gray">
            <BsGripVertical />
            <FiBookOpen className="text-success m-2"/>
          <a className="wd-assignment-link text-black"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A3 - JAVASCRIPT + REACT
          </a><br/>
          <span className="text-danger mx-2"> Multiple Modules </span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
          <LessonControlButtons />
        </li>
        </div>
      </ul>
    </div>
)};
