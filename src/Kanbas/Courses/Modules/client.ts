import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const updateModule = async (module: any) => {
  try {
    console.log("[Client] Updating module:", module);
    const cleanModule = {
      ...module,
      _id: module._id.toString(), // Convert ObjectId to string if needed
    };
    delete cleanModule.editing;

    const response = await axiosWithCredentials.put(
      `${MODULES_API}/${cleanModule._id}`,
      cleanModule
    );
    return response.data;
  } catch (error) {
    console.error("[Client] Error updating module:", error);
    throw error;
  }
};

export const deleteModule = async (moduleId: string) => {
  console.log("[Client] Deleting module:", moduleId);
  const response = await axiosWithCredentials.delete(
    `${MODULES_API}/${moduleId}`
  );
  return response.data;
};
