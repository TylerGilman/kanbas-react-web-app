import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import  * as db from "../../Database";
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
  };
  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div className="wd-modules container">
      <div id="wd-wrapper" className="row">
      <ModulesControls moduleName={moduleName} 
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />

      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li key={module._id} className="list-group-item">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                <FacultyProtectedContent>
                {module.editing && (
                  <input 
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                     saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name} 
                  />
                )}
                <ModuleControlButtons 
                  moduleId={module._id}
                   deleteModule={(moduleId) => removeModule(moduleId)}
                   editModule={(moduleId) => dispatch(editModule(moduleId))} />
                </FacultyProtectedContent>
              </div>
            </li>
          ))}
      </ul>
      </div>
    </div>
  );
}
