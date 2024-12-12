import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findUsersForCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/users`);
    return data;
};

export const updateCourse = async (course: any) => {
  const response = await axiosWithCredentials.put(
    `${COURSES_API}/${course.number}`,
    course
  );
  return response.data;
};

export const createCourse = async (course: any) => {
  const response = await axiosWithCredentials.post(COURSES_API, course);
  return response.data;
};

export const deleteCourse = async (id: string) => {
 const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
 return data;
};

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(COURSES_API);
  console.log(data);
  return data;
};

// Module operations
export const findModulesForCourse = async (courseId: string) => {
 const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
 return data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
 const response = await axiosWithCredentials.post(
   `${COURSES_API}/${courseId}/modules`,
   module
 );
 return response.data;
};


