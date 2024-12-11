import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API_BASE_URL = `${REMOTE_SERVER}/api`;

export const fetchEnrollments = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${API_BASE_URL}/users/${userId}/enrollments`);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseNumber: string) => {
  const response = await axiosWithCredentials.post(`${API_BASE_URL}/courses/${courseNumber}/enrollments`, {
    userId,
  });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseNumber: string) => {
  const response = await axiosWithCredentials.delete(
    `${API_BASE_URL}/courses/${courseNumber}/enrollments/${userId}`
  );
  return response.data;
};
