export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor text-end">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" className="form-control" /><br /><br />
      <textarea id="wd-description" className="form-control">
        The assignment is available online Submit a link to the landing page of your Web applicaton running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignmetns Link to the Kanbas applicaton Links to all relevant source code repositories The Kanbas appliccation should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <label htmlFor="wd-points">Points</label>
          </div>
          <div className="col">
            <input id="wd-points" value={100} />
          </div>
        </div>
          <br/>
        <div className="row">
          <div className="col">
            <label htmlFor="wd-group">Assignment Group</label>
          </div>
          <div className="col">
            <select id="wd-group">
              <option selected>ASSIGNMENTS</option>
              <option>QUIZS</option>
              <option>TESTS</option>
              <option>PROJECTS</option>
            </select>
          </div>
        </div>
          <br/>
        <div className="row">
          <div className="col">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </div>
          <div className="col">
            <select id="wd-display-grade-as">
              <option selected>Percentage</option>
              <option selected>Total Points</option>
              <option selected>Fractional</option>
            </select>
          </div>
        </div>
          <br/>
        <div className="row">
          <div className="col">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </div>
          <div className="col">
            <select id="wd-submission-type">
              <option selected>Online</option>
              <option>Gradescope</option>
            </select>
          </div>
        </div><br/>
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
        <label><b>Online Entry Options</b></label><br/>
        <input type="checkbox" name="check-entry-options" id="wd-chkbox-text-entry"/>
        <label htmlFor="wd-chkbox-text-entry">Text Entry</label><br/>

        <input type="checkbox" name="check-entry-options" id="wd-chkbox-website-url"/>
        <label htmlFor="wd-chkbox-website-url">Website URL</label><br/>

        <input type="checkbox" name="check-entry-options" id="wd-chkbox-media-recordings"/>
        <label htmlFor="wd-chkbox-media-recordings">Media Recordings</label><br/>

        <input type="checkbox" name="check-entry-options" id="wd-chkbox-student-annotation"/>
        <label htmlFor="wd-chkbox-student-annotation">Student Annotation</label><br/>

        <input type="checkbox" name="check-entry-options" id="wd-chkbox-file-uploads"/>
        <label htmlFor="wd-chkbox-file-uploads">File Uploads</label>
        </div>
        </div><br/>
        <div className="row">
          <div className="col">
          <label htmlFor="wd-assign-to">Assign</label>
          </div>
          <div className="col">
            <label htmlFor="wd-assign-to" ><b>Assign to</b></label><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <input type="text" id="wd-assign-to" name="wd-assign-to" placeholder="Everyone"/><br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <label htmlFor="wd-due-date"><b>Due</b></label><br/>
            <input type="date" id="wd-due-date" name="wd-due-date"/><br/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <label htmlFor="wd-avaliable-from" ><b>Available from</b></label><br/>
            <input type="date" id="wd-avaliable-from" className="form-control"/>
          </div>
          <div className="col">
            <label htmlFor="wd-avaliable-until"><b>Until</b></label><br/>
            <input type="date" id="wd-avaliable-until" className="form-control"/>
          </div>
        </div>
        <hr />
        <div>
            <button className="btn btn-secondary float-end m-1">Cancel</button>
            <button className="btn btn-danger float-end m-1">Save</button>
        </div>
      </div>
    </div>
);}
