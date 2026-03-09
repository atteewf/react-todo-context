import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, createContext, useContext } from "react";

export const ThemeContext = createContext();

function Header() {
  const { valueTheme, valueTextcolor, ChangementTheme } =
    useContext(ThemeContext);

  return (
    <header
      style={{
        backgroundColor: valueTheme,
        color: valueTextcolor,
        padding: "1rem",
      }}
    >
      <h1>Todo List React</h1>
      <label>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={ChangementTheme}
        >
          {valueTheme === "#282c34" ? "Passer au clair" : "Passer au sombre"}
        </button>
      </label>
    </header>
  );
}

function App() {
  const [valueTheme, setValueTheme] = useState("#282c34");
  const [valueTextcolor, setvalueTextcolor] = useState("white");

  function ChangementTheme() {
    if (valueTheme === "#282c34") {
      setValueTheme("#ffffff");
      setvalueTextcolor("#282c34");
    } else {
      setValueTheme("#282c34");
      setvalueTextcolor("white");
    }
  }

  return (
    <ThemeContext.Provider
      value={{ valueTheme, valueTextcolor, ChangementTheme }}
    >
      <TodoProvider>
        <div className="App">
          <Header />
          <TodoInput />
          <TodoList />
        </div>
      </TodoProvider>
    </ThemeContext.Provider>
  );
}

export default App;
