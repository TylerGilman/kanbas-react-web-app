import axios from "axios";

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENTS_API = `${API_BASE}/api/assignments`;

const axiosWithCredentials = axios.create({ withCredentials: true });

export const findAssignmentsForCourse = async (courseId: string) => {
  console.log("[Client] findAssignmentsForCourse - courseId:", courseId, "URL:", `${COURSES_API}/${courseId}/assignments`);
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  console.log("[Client] findAssignmentsForCourse response:", response.data);
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  console.log("[Client] findAssignmentById - assignmentId:", assignmentId);
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  console.log("[Client] findAssignmentById response:", response.data);
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  console.log("[Client] createAssignment - courseId:", courseId, "assignment:", assignment);
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  console.log("[Client] createAssignment response:", response.data);
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  console.log("[Client] updateAssignment - assignmentId:", assignmentId, "assignment:", assignment);
  const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
  console.log("[Client] updateAssignment response:", response.data);
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  console.log("[Client] deleteAssignment - assignmentId:", assignmentId);
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  console.log("[Client] deleteAssignment response:", response.data);
  return response.data;
};
