import axios from "axios";
import { Course } from "../types";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;


export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get(USERS_API);
  return response.data;
};

export const findCoursesForUser = async (userId: string): Promise<Course[]> => {
  try {
    const response = await axiosWithCredentials.get(`${USERS_API}/${userId}/courses`);
    return response.data.filter((course: Course | null) => course !== null);
  } catch (error) {
    console.error('Error finding courses for user:', error);
    return [];
  }
};

export const enrollIntoCourse = async (courseNumber: string): Promise<void> => {
  try {
    await axiosWithCredentials.post(`${USERS_API}/current/courses/${courseNumber}`);
  } catch (error) {
    console.error('Error enrolling in course:', error);
    throw error;
  }
};

export const unenrollFromCourse = async (courseNumber: string): Promise<void> => {
  try {
    await axiosWithCredentials.delete(`${USERS_API}/current/courses/${courseNumber}`);
  } catch (error) {
    console.error('Error unenrolling from course:', error);
    throw error;
  }
};

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const profile = async () => {
  try {
    const response = await axiosWithCredentials.get(`${USERS_API}/profile`);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 401) {
      return null;
    }
    throw error;
  }
};

export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const deleteUser = async (userId: string) => {
  const response = await axiosWithCredentials.delete( `${USERS_API}/${userId}` );
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findMyCourses = async () => {
  const response = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(
    `${USERS_API}/current/courses`, 
    course
  );
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}`, user);
  return response.data;
};

export const findUserById = async (id: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}/${id}`);
  return response.data;
};

export const findUsersByRole = async (role: string) => {
  const response = await
    axiosWithCredentials.get(`${USERS_API}?role=${role}`);
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get(`${USERS_API}?name=${name}`);
  return response.data;
};
