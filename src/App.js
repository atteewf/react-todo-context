import logo from "./logo.svg";
import "./App.css";
import {
  useState,
  useReducer,
  useCallback,
  useContext,
  createContext,
} from "react";

const TodoContext = createContext();
const ThemeContext = createContext();

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...todos, action.list];
    }
    case "DELETE_TODO":
      return todos.filter((word) => word !== action.list);
    default:
      return todos;
  }
}

function TodoList() {
  const { todos, DeleteTodo } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item}
          <button
            onClick={() => {
              DeleteTodo(item);
            }}
          >
            SUPPRIMER
          </button>
        </li>
      ))}
    </ul>
  );
}

function Todo() {
  const [list, setList] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const DeleteTodo = useCallback(
    (item) => dispatch({ type: "DELETE_TODO", list: item }),
    [dispatch],
  );

  const value = { todos, DeleteTodo };
  return (
    <TodoContext.Provider value={value}>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          if (list.trim() === "") return;
          dispatch({ type: "ADD_TODO", list });
          setList("");
        }}
      />

      <div>
        Hello on est bien la !!!
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

function Header() {
  const { valueTheme, ChangementTheme, valueTextcolor } =
    useContext(ThemeContext);

  return (
    <header
      className="App-header"
      style={{ backgroundColor: valueTheme, color: valueTextcolor }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
        <input type="checkbox" onClick={ChangementTheme} />
        couleur du theme {valueTheme}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}
function App() {
  const [valueTheme, setValueTheme] = useState("#282c34");
  const [valueTextcolor, setvalueTextcolor] = useState("white");
  const [checkTheme, setcheckTheme] = useState(true);

  function ChangementTheme() {
    if (checkTheme) {
      setValueTheme("#ffffffff");
      setvalueTextcolor("#282c34");
      setcheckTheme(false);
    } else {
      setValueTheme("#282c34");
      setvalueTextcolor("white");
      setcheckTheme(true);
    }
  }

  return (
    <ThemeContext.Provider
      value={{ valueTheme, ChangementTheme, valueTextcolor }}
    >
      <div className="App">
        <Header />
        <Todo />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
