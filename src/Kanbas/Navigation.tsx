import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { GiCalendar, GiLabradorHead } from "react-icons/gi";
import { LuInbox } from "react-icons/lu";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 100 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/northeastern.png" width="65px" alt="Northeastern Logo" />
      </a>
      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Account") ? "active bg-white text-danger" : ""
        }`}
      >
        <FaRegCircleUser className="fs-1 text-danger" />
        <br />
        Account
      </Link>
      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Dashboard") ? "active bg-white text-danger" : ""
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Courses") ? "active bg-white text-danger" : ""
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Calendar") ? "active bg-white text-danger" : ""
        }`}
      >
        <GiCalendar className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Inbox") ? "active bg-white text-danger" : ""
        }`}
      >
        <LuInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 bg-black text-white ${
          pathname.includes("Labs") ? "active bg-white text-danger" : ""
        }`}
      >
        <GiLabradorHead className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}
