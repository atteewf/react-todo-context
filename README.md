# React Todo List with Theme Toggle

## Preview

![TodoList Theme clair](https://github.com/user-attachments/assets/10b1e3a3-ecd1-4c6b-8146-e8808d61b528)
![TodoList Theme sombre](https://github.com/user-attachments/assets/aa5f33e3-d98a-4b03-b5be-9ceb53caea49)

## Description

A clean and modern **Todo List** built with **React**, demonstrating:

- Component-based architecture (`TodoInput`, `TodoList`, `TodoItem`)
- Global state management with **Context + useReducer**
- Theme toggle (light / dark) using **ThemeContext**
- Minimalist and responsive CSS design
- Tailwind button for modern UI feel

This project is designed to be **readable and understandable by recruiters** while showing practical React skills.

---

## Features

- **Add Todo**: Type a task and press Enter to add it.
- **Delete Todo**: Remove a task by clicking the "Supprimer" button.
- **Theme Toggle**: Switch between light and dark themes with a button.
- **Responsive Design**: Works on desktop and mobile.
- **Clean Code**: Components are decoupled, context manages global state.

---

## Tech Stack

- React 18+
- Hooks: `useState`, `useReducer`, `useContext`, `useCallback`
- Context API for state management
- Tailwind CSS (for button styling)
- Plain CSS (`App.css`) for layout and theme

---

## Folder Structure

src/
├─ components/
│ ├─ TodoInput.js
│ ├─ TodoList.js
│ └─ TodoItem.js
├─ context/
│ └─ TodoContext.js
├─ App.js
└─ App.css
index.js

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/atteewf/react-todo-context.git
```

2. Install dependencies: `npm install`

3. Start the development server: `npm start`
   Open http://localhost:3000 in your browser.

---

## Future Improvements

Add unit tests with Jest and React Testing Library

Store todos in localStorage to persist data

Add edit functionality for todos

Improve UI/UX with Tailwind components

---

## Author

Atteewf
– React Developer Portfolio Ready

---

## Contact

LinkedIn: https://www.linkedin.com/in/seb-oll-0188133a4/
Email: ateeew@gmail.com
