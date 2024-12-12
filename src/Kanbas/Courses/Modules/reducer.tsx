// src/Kanbas/Courses/Modules/reducer.tsx
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Module {
  _id: string;
  name: string;
  description?: string;
  course: string;
  editing?: boolean;
}

const initialState = {
  modules: [] as Module[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<Module>) => {
      state.modules.push(action.payload);
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      state.modules = state.modules.filter(
        (module) => module._id !== action.payload
      );
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      const index = state.modules.findIndex(m => m._id === action.payload._id);
      if (index !== -1) {
        state.modules[index] = {
          ...state.modules[index],
          ...action.payload,
          editing: action.payload.editing ?? state.modules[index].editing
        };
      }
    },
    editModule: (state, action: PayloadAction<string>) => {
      const module = state.modules.find(m => m._id === action.payload);
      if (module) {
        module.editing = true;
      }
    },
  },
});

export const { setModules, addModule, deleteModule, updateModule, editModule } = modulesSlice.actions;
export default modulesSlice.reducer;
