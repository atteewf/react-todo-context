import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li>
      {todo.text}
      <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
    </li>
  );
}
