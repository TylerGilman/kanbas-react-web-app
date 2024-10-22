import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assignments } from '../../Database';

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
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const courseId = parts[3];
  const assignmentId = parts[5];
  
  const assignment = assignments.find((a: Assignment) => a._id === assignmentId);

  if (!assignment) {
    return (
      <div className="p-4">
        <h1>Assignment not found</h1>
        <Link to={`/Kanbas/Courses/${courseId}`} 
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
            <label htmlFor="wd-name" className="block font-medium mb-1">
              Assignment Name
            </label>
            <input
              id="wd-name"
              defaultValue={assignment.title}
              className="form-control"
            />
          </div>

          <div>
            <textarea
              id="wd-description"
              className="form-control"
              defaultValue={assignment.description}
            />
          </div>

          <div className="row">
            <div className="col-6">
              <label htmlFor="wd-points" className="block font-medium mb-1">
                Points
              </label>
              <input
                id="wd-points"
                type="number"
                defaultValue={assignment.points}
                className="form-control"
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
              <label className="block font-medium mb-1">Due</label>
              <input
                type="date"
                defaultValue={assignment.due}
                className="form-control"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <label className="block font-medium mb-1">Available from</label>
                <input
                  type="date"
                  defaultValue={assignment.available}
                  className="form-control"
                />
              </div>
              <div className="col-6">
                <label className="block font-medium mb-1">Until</label>
                <input
                  type="date"
                  defaultValue={assignment.available}
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 border-t pt-4">
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-secondary float-end ms-2"
            >
              Cancel
            </Link>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
