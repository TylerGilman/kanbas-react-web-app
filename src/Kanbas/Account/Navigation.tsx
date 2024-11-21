import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

interface NavLink {
  to: string;
  label: string;
  id: string;
}

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  
  const links: NavLink[] = [
    { to: "/Kanbas/Account/Signin", label: "Signin", id: "signin" },
    { to: "/Kanbas/Account/Signup", label: "Signup", id: "signup" },
    { to: "/Kanbas/Account/Profile", label: "Profile", id: "profile" }
  ];

  // Filter links based on user authentication status
  const visibleLinks = currentUser 
    ? links.filter(link => link.label === "Profile")
    : links.filter(link => ["Signin", "Signup"].includes(link.label));

  return (
    <div id="wd-account-navigation" className="list-group">
      {visibleLinks.map((link) => (
        <Link
          key={`account-nav-${link.id}`}
          to={link.to}
          className={`
            list-group-item 
            border-0 
            text-decoration-none 
            mb-3
            ${pathname.includes(link.label) 
              ? "active text-black border-left border-5" 
              : "text-danger"}
          `}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
