import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 2,
    name: "Gravity for dummies",
    description: "introduction lecture",
    course: "physics"
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div>
      <h3 id="wd-working-with-objects">Working With Objects</h3>
      
      <h4>Assignment Properties</h4>
      <div className="mb-3">
        <label className="form-label">Title:</label>
        <input
          className="form-control w-75"
          id="wd-assignment-title"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary mt-2"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
      </div>

      <div className="mb-3">
        <label className="form-label">Score:</label>
        <input
          type="number"
          className="form-control w-75"
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })
          }
        />
        <a
          className="btn btn-primary mt-2"
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
      </div>

      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          <label className="form-check-label">Completed</label>
        </div>
        <a
          className="btn btn-primary mt-2"
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed Status
        </a>
      </div>

      <h4>Module Properties</h4>
      <div className="mb-3">
        <label className="form-label">Name:</label>
        <input
          className="form-control w-75"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a
          className="btn btn-primary mt-2"
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Module Name
        </a>
      </div>

      <div className="mb-3">
        <label className="form-label">Description:</label>
        <input
          className="form-control w-75"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <a
          className="btn btn-primary mt-2"
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
      </div>

      <h4>Retrieving Properties</h4>
      <div className="d-flex gap-2 mb-3">
        <a
          id="wd-retrieve-assignment-title"
          className="btn btn-primary"
          href={`${ASSIGNMENT_API_URL}/title`}
        >
          Get Title
        </a>
        <a
          id="wd-retrieve-module"
          className="btn btn-primary"
          href={`${MODULE_API_URL}`}
        >
          Get Module
        </a>
        <a
          id="wd-retrieve-module-name"
          className="btn btn-primary"
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
      </div>
    </div>
  );
}
