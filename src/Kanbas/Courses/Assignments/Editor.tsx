import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as client from "./client";

interface Assignment {
  title: string;
  description: string;
  points: number;
  dueDate: string;
  available: string;
}

const AssignmentEditor: React.FC = () => {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState<Assignment>({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    available: "",
  });

  useEffect(() => {
    if (aid && aid !== "new") {
      const fetchAssignment = async () => {
        try {
          const data = await client.findAssignmentById(aid!);
          setAssignment(data);
        } catch (error) {
          console.error("Error fetching assignment:", error);
        }
      };
      fetchAssignment();
    }
  }, [aid]);

  const saveAssignment = async () => {
    try {
      if (aid === "new") {
        await client.createAssignment(cid!, assignment);
      } else {
        await client.updateAssignment(aid!, assignment);
      }
      navigate(`/Kanbas/courses/${cid}/assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>{aid === "new" ? "New Assignment" : "Edit Assignment"}</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            rows={4}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="points" className="form-label">
            Points
          </label>
          <input
            type="number"
            id="points"
            className="form-control"
            value={assignment.points}
            onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="form-control"
            value={assignment.dueDate}
            onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
          />
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={saveAssignment}>
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate(`/Kanbas/courses/${cid}/assignments`)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AssignmentEditor;
