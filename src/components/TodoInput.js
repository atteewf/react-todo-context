import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <input
      type="text"
      placeholder="Ajouter une todo"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
}
