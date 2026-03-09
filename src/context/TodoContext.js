import { createContext, useReducer, useCallback } from "react";

export const TodoContext = createContext();

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, { id: Date.now(), text: action.text }];
    case "DELETE_TODO":
      return todos.filter((todo) => todo.id !== action.id);
    default:
      return todos;
  }
}

export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(reducer, []);

  const addTodo = useCallback((text) => {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", text });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({ type: "DELETE_TODO", id });
  }, []);

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
