import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";
import { BsTrash, BsPencilSquare } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
}

const Assignments: React.FC = () => {
  const { cid } = useParams<{ cid: string }>();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const data = await client.findAssignmentsForCourse(cid!);
        setAssignments(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
    fetchAssignments();
  }, [cid]);

  const deleteAssignment = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      try {
        await client.deleteAssignment(id);
        setAssignments(assignments.filter((a) => a._id !== id));
      } catch (error) {
        console.error("Error deleting assignment:", error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Assignments</h2>
        <button
          className="btn btn-danger"
          onClick={() => navigate(`/Kanbas/courses/${cid}/assignments/new`)}
        >
          <FaPlus className="me-2" /> New Assignment
        </button>
      </div>
      {assignments.length === 0 ? (
        <div className="alert alert-info">No assignments available</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Points</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td>{assignment.title}</td>
                <td>{assignment.description}</td>
                <td>{assignment.points}</td>
                <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() =>
                      navigate(`/Kanbas/courses/${cid}/assignments/${assignment._id}`)
                    }
                  >
                    <BsPencilSquare /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteAssignment(assignment._id)}
                  >
                    <BsTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Assignments;
