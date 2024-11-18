import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function StudentProtectedRoute({ 
  children, 
  courseId 
}: { 
  children: any;
  courseId: string;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const isEnrolled = enrollments.some(
    (enrollment: any) => 
      enrollment.user === currentUser._id && 
      enrollment.course === courseId
  );

  if (currentUser?.role === "FACULTY" || isEnrolled) {
    return children;
  }
  
  return <Navigate to="/Kanbas/Dashboard" />;
}
