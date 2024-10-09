import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" className="form-control mb-2" />
      <input id="wd-password" placeholder="password" type="password" className="form-control mb-2"/>
      <Link  id="wd-signin-btn"
             to="/Kanbas/Dashboard" className="btn btn-primary w-100 list-group-item border border-0"> Sign in </Link>
      <Link  id="wd-signup-link" to="/Kanbas/Account/Signup" className="list-group-item border border-0">Sign up</Link>
    </div>
);}
