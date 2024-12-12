import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";
import React, { useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import FacultyProtectedContent from "../../Account/FacultyProtectedContent"
import * as coursesClient from "../client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
    setModuleName(""); // Clear input after adding
  };

  const removeModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const saveModule = async (module: any) => {
    try {
      console.log("[Component] Saving module:", module);
      const cleanModule = {
        ...module,
        editing: undefined // Remove editing flag before sending to server
      };
      const updatedModule = await modulesClient.updateModule(cleanModule);
      console.log("[Component] Module updated:", updatedModule);
      dispatch(updateModule({ ...updatedModule, editing: false }));
    } catch (error) {
      console.error("[Component] Error saving module:", error);
      // Keep module in editing state if save fails
      dispatch(updateModule({ ...module, editing: true }));
    }
  };

  const handleModuleEdit = (module: any, newName: string) => {
    dispatch(updateModule({ ...module, name: newName }));
  };

  return (
    <div className="wd-modules container">
      <div id="wd-wrapper" className="row">
        <ModulesControls 
          moduleName={moduleName} 
          setModuleName={setModuleName}
          addModule={createModuleForCourse}
        />
        <ul id="wd-modules" className="list-group rounded-0">
          {modules.map((module: any) => (
            <li key={module._id} className="list-group-item">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <FacultyProtectedContent>
                    <input 
                      className="form-control w-50 d-inline-block"
                      value={module.name}
                      onChange={(e) => handleModuleEdit(module, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveModule(module);
                        }
                      }}
                      onBlur={() => saveModule(module)}
                      autoFocus
                    />
                  </FacultyProtectedContent>
                )}
                <FacultyProtectedContent>
                  <ModuleControlButtons 
                    moduleId={module._id}
                    deleteModule={removeModule}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                </FacultyProtectedContent>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
