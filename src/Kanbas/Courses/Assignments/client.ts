import axios from "axios";

const API_BASE = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${API_BASE}/api/courses`;
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const findAssignmentsForCourse = async (courseId: string) => {
  console.log("[CLIENT] About to fetch assignments for course:", courseId);
  console.log("[CLIENT] Full URL:", `${COURSES_API}/${courseId}/assignments`);
    
  try {
    const response = await axios.get(
      `${COURSES_API}/${courseId}/assignments`
    );
    console.log("[CLIENT] Response received:", response.data);
    return response.data;
  } catch (error) {
    console.error("[CLIENT] Error fetching assignments:", error);
    throw error;
  }
};



export interface Assignment {
  _id: string;
  title: string;
  description: string;
  points: number;
  due: string;
  available: string;
  availableUntil: string | undefined;
  course: string;
}

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axios.get(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: Omit<Assignment, '_id'>) => {
  console.log("[CLIENT] Creating assignment for course:", courseId, assignment);
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`, 
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: Assignment) => {
  console.log("[CLIENT] Updating assignment:", assignmentId, assignment);
  const response = await axios.put(
    `${ASSIGNMENTS_API}/${assignmentId}`, 
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};
