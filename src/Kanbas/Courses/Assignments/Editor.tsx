import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { Link, useLocation } from 'react-router-dom';

interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  course: string;
}

export default function AssignmentEditor() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cid, aid } = useParams();
  console.log(cid);
  console.log(aid);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState({
    _id: new Date().getTime().toString(),
    title: "",
    description: "",
    points: 100,
    due: new Date().toISOString().split('T')[0],
    available: new Date().toISOString().split('T')[0],
    availableUntil: new Date().toISOString().split('T')[0],
    course: cid
  });

  useEffect(() => {
    if (aid !== "new") {
      const existingAssignment = assignments.find(
        (a: any) => a._id === aid
      );
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [aid, assignments]);

  const handleSave = () => {
    console.log(aid)
    if (aid === "new") {
      const newAssignment = {
      ...assignment,
      _id: new Date().getTime().toString(), // Ensure unique ID
      course: cid // Ensure courseId is set
      };
      dispatch(addAssignment(newAssignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };



  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (!assignment) {
    return (
      <div className="p-4">
        <h1>Assignment not found</h1>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`} 
              className="text-blue-500 hover:underline">
          Return to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="container">
        <div id="wd-assignments-editor" className="space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Assignment Name
            </label>
            <input
              id="title"
              className="form-control"
              value={assignment.title}
              onChange={(e) => setAssignment({
                ...assignment,
                title: e.target.value
              })}
            />
          </div>

          <div>
            <label htmlFor="description" className="block font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              value={assignment.description}
              onChange={(e) => setAssignment({
                ...assignment,
                description: e.target.value
              })}
            />
          </div>

          <div className="row">
            <div className="col-6">
            <label htmlFor="points" className="block font-medium mb-1">
              Points
            </label>
            <input
              id="points"
              type="number"
              className="form-control"
              value={assignment.points}
              onChange={(e) => setAssignment({
                ...assignment,
                points: parseInt(e.target.value)
              })}
            />
            </div>

            <div className="col-6">
              <label htmlFor="wd-group" className="block font-medium mb-1">
                Assignment Group
              </label>
              <select id="wd-group" className="form-control">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>TESTS</option>
                <option>PROJECTS</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="wd-display-grade-as" className="block font-medium mb-1">
              Display Grade As
            </label>
            <select id="wd-display-grade-as" className="form-control">
              <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
            </select>
          </div>

          <div>
            <label htmlFor="wd-submission-type" className="block font-medium mb-1">
              Submission Type
            </label>
            <select id="wd-submission-type" className="form-control">
              <option>Online</option>
              <option>External Tool</option>
            </select>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Online Entry Options</p>
            <div className="space-y-1">
              {[
                'Text Entry',
                'Website URL',
                'Media Recordings',
                'Student Annotation',
                'File Uploads'
              ].map(option => (
                <div key={option} className="form-check">
                  <input
                    type="checkbox"
                    id={`wd-chkbox-${option.toLowerCase().replace(/\s+/g, '-')}`}
                    className="form-check-input"
                  />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Assign To</label>
              <input
                type="text"
                defaultValue="Everyone"
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="due" className="block font-medium mb-1">
                Due Date
              </label>
              <input
                id="due"
                type="date"
                className="form-control"
                value={assignment.due}
                onChange={(e) => setAssignment({
                  ...assignment,
                  due: e.target.value
                })}
              />
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="available" className="block font-medium mb-1">
                  Available From Date
                </label>
                <input
                  id="available"
                  type="date"
                  className="form-control"
                  value={assignment.available}
                  onChange={(e) => setAssignment({
                    ...assignment,
                    available: e.target.value
                  })}
                />
              </div>
            <div className="col">
              <label htmlFor="availableUntil" className="block font-medium mb-1">
              Available Until Date
            </label>
            <input
              id="availableUntil"
              type="date"
              className="form-control"
              value={assignment.availableUntil}
              onChange={(e) => setAssignment({
                ...assignment,
                availableUntil: e.target.value
              })}
            />
            </div>
          </div>

          <div className="mt-4">
            <button 
              onClick={handleCancel}
              className="btn btn-secondary float-end ms-2"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="btn btn-danger float-end"
            >
              Save
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
