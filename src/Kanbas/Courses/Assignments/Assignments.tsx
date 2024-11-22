import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment } from "./reducer";
import { BsGripVertical, BsTrash, BsThreeDotsVertical } from "react-icons/bs";
import { FiBookOpen } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import * as client from "./client";
import FacultyProtectedContent from "../../Account/FacultyProtectedContent";
import LessonControlButtons from "../Modules/LessonControlButtons";

interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  dueDate?: string;
  points?: number;
}

export default function AssignmentsScreen() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const splitPath = pathname.split('/');
  const courseId = splitPath[splitPath.length - 2];

  console.log("[CLIENT] AssignmentsScreen - Initial render");
  console.log("[CLIENT] Current pathname:", pathname);
  console.log("[CLIENT] Extracted courseId:", courseId);

  const { assignments } = useSelector((state: any) => {
    console.log("[CLIENT] Current redux state:", state);
    return state.assignmentsReducer;
  });

  const fetchAssignments = async () => {
    try {
      setLoading(true);
      console.log("[CLIENT] Fetching assignments for course:", courseId);
      const assignments = await client.findAssignmentsForCourse(courseId);
      console.log("[CLIENT] Received assignments:", assignments);
      dispatch(setAssignments(assignments));
    } catch (err) {
      console.error("[CLIENT] Error fetching assignments:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch assignments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("[CLIENT] useEffect triggered with courseId:", courseId);
    if (courseId) {
      fetchAssignments();
    }
  }, [courseId]);

  const handleDelete = async (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      try {
        await client.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
      } catch (error) {
        console.error("[CLIENT] Error deleting assignment:", error);
        setError("Failed to delete assignment");
      }
    }
  };

  if (loading) {
    return <div>Loading assignments...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

return (
  <div id="wd-assignments" className="container">
    {/* Top Search and Action Bar */}
    <div className="row align-items-center mb-3">
      <div className="col-4 position-relative">
        <div className="input-group">
          <span className="input-group-text bg-transparent">
            <FaMagnifyingGlass />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignment"
          />
        </div>
      </div>
      <div className="col-3"></div>
      <div className="col-5 text-end">
        <FacultyProtectedContent>
          <button className="btn btn-light border-dark me-2">
            Group
          </button>
          <button 
            className="btn btn-danger me-2"
            onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments/new`)}
          >
            <i className="fas fa-plus"></i> Assignment
          </button>
          <div className="dropdown d-inline">
            <button 
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <BsThreeDotsVertical />
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Edit Assignment Dates</a></li>
              <li><a className="dropdown-item" href="#">Speed Grader</a></li>
              <li><a className="dropdown-item" href="#">Duplicate</a></li>
            </ul>
          </div>
        </FacultyProtectedContent>
      </div>
    </div>

    {/* Assignments Header */}
    <div className="bg-secondary p-3">
      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center mb-0">
        <span>
          <BsGripVertical className="me-2" /> ASSIGNMENTS
        </span>
        <div className="d-flex align-items-center">
          <span className="me-3">40% of Total</span>
          <FacultyProtectedContent>
            <div className="dropdown d-inline">
              <button 
                className="btn btn-secondary"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDotsVertical />
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Speed Grader</a></li>
              </ul>
            </div>
          </FacultyProtectedContent>
        </div>
      </h3>
    </div>

    {/* Assignment List */}
    <ul id="wd-assignment-list" className="list-group rounded-0">
      {assignments.map((assignment: Assignment) => (
        <li key={assignment._id} className="list-group-item d-flex align-items-center">
          <BsGripVertical className="me-2" />
          <FiBookOpen className="text-success me-2" />
          <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} className="flex-grow-1">
            {assignment.title}
          </Link>
          <span className="text-danger mx-2">Multiple Modules</span> |
          <span className="ms-2"><b>Due:</b> {assignment.dueDate || 'No due date'}</span> |
          <span className="ms-2">{assignment.points || 100} pts</span>
          <LessonControlButtons />
          <FacultyProtectedContent>
          <button 
            className="btn btn-link text-danger ms-auto"
            onClick={() => handleDelete(assignment._id)}
          >
            <BsTrash />
          </button>
          </FacultyProtectedContent>
        </li>
      ))}
    </ul>
  </div>
);
}
