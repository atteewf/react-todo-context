//VERSION TODOLIST AVEC BOUTON SUR CHAQUE ELEMENT INTEGRE DANS LA TODOLIST
//UTILISATION D UN USECONTEXT POUR GERER LES TODOS ET DELETETODOS
//UTILISATION EGALEMEMENT D UN AUTRE USECONTAXT POUR CHANGER LE THEME ET LA COULUER DE LA TYPO
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
    case "ADD_TODOS": {
      return [...todos, action.list];
    }
    case "DELETE_TODOS": {
      todos = todos.filter((word) => word !== action.list);
      return todos;
    }
    default:
      return todos;
  }
}

function Affichagetodo() {
  const { todos, fonctionDeleteTodo } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          {item}{" "}
          <button
            onClick={() => {
              fonctionDeleteTodo(item);
            }}
          >
            {" "}
            SUPPRIMER{" "}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Todo() {
  const [list, setList] = useState("");
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(reducer, []);
  const fonctionDeleteTodo = useCallback(
    (item) => dispatch({ type: "DELETE_TODOS", list: item }),
    [dispatch]
  );

  const value = { todos, fonctionDeleteTodo };
  return (
    <TodoContext.Provider value={value}>
      <input
        type="text"
        value={list}
        onChange={(e) => setList(e.target.value)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          if (list.trim() === "") return;

          // setTodos([...todos, list]);
          dispatch({ type: "ADD_TODOS", list });
          setList("");
        }}
      />

      <div>
        Hello on est bien la !!!
        <Affichagetodo />
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

// //VERSION TODOLIST AVEC BOUTTON SUR CHAQUE ELEMENT INTEGRE DANS LA TODOLIST
//UTILISATION D UN USESTATE SURTOUT USEREDUCER USECALLBACK
// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useReducer, useCallback} from "react";

// function reducer(todos, action) {
//   switch (action.type) {
//     case "ADD_TODOS": {
//       return [...todos, action.list];
//     }
//     case "DELETE_TODOS": {
//       todos = todos.filter((word) => word !== action.list);
//       return todos;
//     }
//     default:
//       return todos;
//   }
// }

// function Affichagetodo({ list, deleteTodo }) {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>
//           {item}{" "}
//           <button
//             onClick={() => {
//               deleteTodo(item);
//             }}
//           >
//             {" "}
//             SUPPRIMER{" "}
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function Todo() {
//   const [list, setList] = useState("");
//   // const [todos, setTodos] = useState([]);
//   const [todos, dispatch] = useReducer(reducer, []);
//   const fonctionDeleteTodo = useCallback(
//     (item) => dispatch({ type: "DELETE_TODOS", list: item }),
//     [dispatch]
//   );
//   return (
//     <div>
//       <input
//         type="text"
//         value={list}
//         onChange={(e) => setList(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key !== "Enter") return;
//           if (list.trim() === "") return;

//           // setTodos([...todos, list]);
//           dispatch({ type: "ADD_TODOS", list });
//           setList("");
//         }}
//       />

//       <div>
//         Hello on est bien la !!!
//         <Affichagetodo list={todos} deleteTodo={fonctionDeleteTodo} />
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Todo />
//       </header>
//     </div>
//   );
// }

// export default App;

//CONCEPTION DE LA TODOLIST AVEC USEREDUCER
// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useReducer } from "react";

// function reducer(todos, action) {
//   switch (action.type) {
//     case "ADD_TODOS": {
//       return [...todos, action.list];
//     }
//     default:
//       return todos;
//   }
// }

// function Affichagetodo({ list }) {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// function Todo() {
//   const [list, setList] = useState("");
//   // const [todos, setTodos] = useState([]);
//   const [todos, dispatch] = useReducer(reducer, []);
//   return (
//     <div>
//       <input
//         type="text"
//         value={list}
//         onChange={(e) => setList(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key !== "Enter") return;
//           if (list.trim() === "") return;

//           // setTodos([...todos, list]);
//           dispatch({ type: "ADD_TODOS", list });
//           setList("");
//         }}
//       />

//       <div>
//         Hello on est bien la !!!
//         <Affichagetodo list={todos} />
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Todo />
//       </header>
//     </div>
//   );
// }

// export default App;

//const [list, setList] = useState("");

// function List() {
//   return <div>{list}</div>;
// }
// function Affichagetodo({ list }) {
//   return (
//     <div>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Todo() {
//   const [list, setList] = useState("");
//   const [todos, setTodos] = useState([]);
//   return (
//     <div>
//       {" "}
//       <input
//         type="text"
//         onKeyDown={(e) => {
//           if (e.key !== "Enter") return;
//           if (list.trim() === "") return;
//           if (e.key === "Enter") {
//             setTodos([...list, e.target.value]);
//           }
//         }}
//       />{" "}
//       <div>
//         Hello on est bien la !!!
//         <Affichagetodo list={todos} />
//       </div>
//       ;
//     </div>
//   );
// }

// Version finale d'une Todolist simple avec un enter pour valider les données entrées
// function Affichagetodo({ list }) {
//   return (
//     <ul>
//       {list.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }

// function Todo() {
//   const [list, setList] = useState("");
//   const [todos, setTodos] = useState([]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={list}
//         onChange={(e) => setList(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key !== "Enter") return;
//           if (list.trim() === "") return;

//           setTodos([...todos, list]);
//           setList("");
//         }}
//       />

//       <div>
//         Hello on est bien la !!!
//         <Affichagetodo list={todos} />
//       </div>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Todo />
//       </header>
//     </div>
//   );
// }

// export default App;
