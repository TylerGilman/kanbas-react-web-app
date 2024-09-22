export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of your Web applicaton running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignmetns Link to the Kanbas applicaton Links to all relevant source code repositories The Kanbas appliccation should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
          <br/>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option selected>ASSIGNMENTS</option>
              <option>QUIZS</option>
              <option>TESTS</option>
              <option>PROJECTS</option>
            </select>
          </td>
        </tr>
          <br/>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected>Percentage</option>
              <option selected>Total Points</option>
              <option selected>Fractional</option>
            </select>
          </td>
        </tr>
          <br/>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected>Online</option>
              <option>Gradescope</option>
            </select>
          </td>
        </tr><br/>
        <tr>
          <td>
          </td>
          <td align="left" valign="top">
        <label>Online Entry Options</label><br/>
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
        </td>
        </tr><br/>
        <tr>
          <td align="right" valign="top">
          <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to" >Assign to</label><br/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="text" id="wd-assign-to" name="wd-assign-to" placeholder="Everyone"/><br/><br/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date" id="wd-due-date" name="wd-due-date"/><br/><br/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-avaliable-from">Available from</label><br/>
            <input type="date" id="wd-avaliable-from"/>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-avaliable-until">Until</label><br/>
            <input type="date" id="wd-avaliable-until"/>
          </td>
        </tr>
        <tr>
          <td colSpan={3}>
            <hr/>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
);}
