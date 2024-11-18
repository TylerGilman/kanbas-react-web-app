import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: { todo: { title: string; id: string; description: string } }) {
  const dispatch = useDispatch();
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="flex-grow-1">{todo.title}</span>
      <button 
        className="btn btn-primary ms-2"
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
      >
        Edit
      </button>
      <button 
        className="btn btn-danger ms-2"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        Delete
      </button>
    </li>
  );
}
