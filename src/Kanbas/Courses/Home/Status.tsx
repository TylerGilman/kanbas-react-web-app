import WhiteCheckmark from "./WhiteCheckmark";
import { CiImport } from "react-icons/ci";
import { AiOutlineImport } from "react-icons/ai";
import { MdAddHome } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { SiAlwaysdata } from "react-icons/si";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaRegBell } from "react-icons/fa";
export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="m-4 text-start flex flex-col space-y-2 w-100 m-2">
      <h2>Course Status</h2>
        <div className="text-start flex">
          <button className="btn btn-secondary m-2">Unpublish</button>
            <button className="btn btn-success"><WhiteCheckmark/>Publish</button>
        </div>
      <button className="btn btn-secondary text-start w-75 m-1"><CiImport /> Import Existing Content</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><AiOutlineImport /> Import from Commons</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><MdAddHome /> Choose Home Page</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><SiGoogleanalytics /> View Course Stream</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><TfiAnnouncement /> New Announcement</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><SiAlwaysdata /> New Analytics</button> <br/>
      <button className="btn btn-secondary text-start w-75 m-1"><FaRegBell /> View Course Notifications</button> 
  </div>
);}


