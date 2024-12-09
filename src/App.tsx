import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./Kanbas/store"; // Your Redux store
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import AssignmentEditor from "./Kanbas/Courses/Assignments/Editor";

const App = () => {
  const ProtectedRoute = ({ children, role }: { children: JSX.Element; role: string }) => {
    // Access `currentUser` from `accountReducer`
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    // Check if the user is logged in and has the required role
    if (!currentUser || currentUser.role !== role) {
      return <Navigate to="/not-authorized" replace />;
    }

    return children;
  };

  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/Labs" />} />
          {/* Labs Route */}
          <Route path="/Labs/*" element={<Labs />} />
          {/* Kanbas Routes */}
          <Route path="/Kanbas/*" element={<Kanbas />} />
          {/* Protected Assignment Editor */}
          <Route
            path="/not-authorized"
            element={
              <div className="text-center">
                <h1>Access Denied</h1>
                <p>You do not have the necessary permissions to view this page.</p>
                <a href="#/" className="btn btn-primary">
                  Return to Home
                </a>
              </div>
            }
          />
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
