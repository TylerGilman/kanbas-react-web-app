import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="list-group">
      <Link to={`/Kanbas/Account/Signin`} className={`text-danger list-group-item border border-0 text-decoration-none ${pathname.includes("Signin") ? "active text-black border-left border-5" : "text-danger"}`}> Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`}  className={`text-danger list-group-item border border-0 text-decoration-none ${pathname.includes("Signup") ? "active text-black" : "text-danger"}`}> Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} className={`text-danger list-group-item border border-0 text-decoration-none ${pathname.includes("Profile") ? "active text-black" : "text-danger"}`}> Profile </Link> <br/>
    </div>
);}
