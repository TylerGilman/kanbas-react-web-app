import { useSelector } from "react-redux";
import React from "react";

export default function FacultyProtectedContent({ 
  children, 
  fallback = null 
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  
  if (currentUser?.role === "FACULTY") {
    return <>{children}</>;
  }
  
  return <>{fallback}</>;
}
