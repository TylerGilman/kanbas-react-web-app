export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
    <button id="wd-collapse-all">Collapse All</button>
    <button id="wd-view-progress">View Progress</button>
    <select id="wd-publish-setting">
       <option value="publish_all" selected>Publish All</option>
       <option value="save">Save</option>
       <option value="publish_single">Publish Single</option>
    </select>
    <button id="wd-add-module" onClick={() => alert("Not able to add module!")} type="button">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
