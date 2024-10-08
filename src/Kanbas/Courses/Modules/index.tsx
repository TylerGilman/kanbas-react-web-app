import ModulesControls from "./ModulesControls";
export default function Modules() {
  return (
    <>
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
<div>
  <ModulesControls /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          LEARNING OBJECTIVES </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          Introduction to the course </li>
        <li className="wd-lesson list-group-item p-3 ps-1">
          Learn what is Web Development </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
      </ul>
    </li>
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
          LEARNING OBJECTIVES </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
        <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
      </ul>
    </li>
  </ul> </div>
  </>
);}
