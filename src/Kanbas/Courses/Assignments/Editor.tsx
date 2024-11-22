import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as client from "./client";
import type { Assignment } from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [assignment, setAssignment] = useState<Omit<Assignment, '_id'>>({
    title: "",
    description: "",
    points: 100,
    due: "",
    available: "",
    availableUntil: "",
    course: cid || ""
  });


const fetchAssignment = async () => {
  if (!aid || aid === "new") {
    console.log("[DEBUG] Skipping fetch for new assignment");
    return;
  }

  try {
    const response = await client.findAssignmentById(aid);
    setAssignment({
      title: response.title || "",
      description: response.description || "",
      points: response.points || 100,
      due: response.dueDate || "",
      available: response.availableFrom || "",
      availableUntil: response.availableUntil || "",
      course: response.course || cid || "",
    });
  } catch (error: any) {
    console.error("[CLIENT] Error fetching assignment:", error);
    if (error.response?.status === 404) {
      alert("Assignment not found!");
    } else {
      alert("An error occurred while fetching the assignment.");
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  }
};

  useEffect(() => {
  console.log("[DEBUG] aid:", aid); // Log the assignment ID
  fetchAssignment();
}, [aid, fetchAssignment]);

  if (!cid) {
    return <div>Invalid course ID</div>;
  }

const handleSubmit = async () => {
  try {
    if (aid === "new") {
      // Creating a new assignment
      const response = await client.createAssignment(cid!, assignment);
      dispatch(addAssignment(response));
    } else if (aid) {
      // Ensure aid is a string for updating an existing assignment
      const response = await client.updateAssignment(aid, assignment as Assignment);
      dispatch(updateAssignment(response));
      console.log("[CLIENT] Assignment updated:", response);
    } else {
      throw new Error("Assignment ID is undefined.");
    }

    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  } catch (error: any) {
    console.error("[CLIENT] Error submitting assignment:", error);
    alert("Failed to save assignment. Please try again.");
  }
};

  // Make sure courseId is valid before proceeding
  if (!cid) {
    return <div>Invalid course ID</div>;
  }
  return (
    <div className="container mt-3">
      <h2>{aid ? "Edit Assignment" : "Add Assignment"}</h2>
      <div className="mb-3">
        <label className="form-label">Assignment Name</label>
        <input
          type="text"
          className="form-control"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Points</label>
        <input
          type="number"
          className="form-control"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Available From</label>
        <input
          type="date"
          className="form-control"
          value={assignment.available}
          onChange={(e) => setAssignment({ ...assignment, available: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Available Until</label>
        <input
          type="date"
          className="form-control"
          value={assignment.availableUntil}
          onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={handleSubmit}>
          {aid ? "Update" : "Add"} Assignment
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
