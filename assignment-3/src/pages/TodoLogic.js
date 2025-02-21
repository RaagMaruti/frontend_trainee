import { useState, useEffect, useRef, createContext } from "react";
import Dummy from "./Dummy";

export const TodoContext = createContext();

export default function TodoLogic() {
  const [query, setQuery] = useState("");
  const [cannotAdd, setCannotAdd] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const counter = useRef(todos.length);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function searchTodo(value) {
    setQuery(value);
    const index = todos.findIndex((t) => t.name === value);
    setCannotAdd(index !== -1);
    return index;
  }

  function addTodo() {
    if (!query || searchTodo(query) !== -1) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: ++counter.current,
        name: query,
        completed: false,
      },
    ]);
    setQuery("");
  }

  function deleteTodo() {
    if (!query || searchTodo(query) === -1) {
      return;
    }

    setTodos(todos.filter((t) => t.name !== query));
    setQuery("");
  }

  function changeStatus(value) {
    setTodos(
      todos.map((t) =>
        t.id === value.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function listTodos() {
    if (!todos.length) {
      return <p>no items</p>;
    }

    const list = todos.map((t) => (
      <li key={t.id}>
        {t.completed ? (
          <p>
            <del>{t.name}</del>
            <button onClick={(e) => changeStatus(t)}>mark remaining</button>
          </p>
        ) : (
          <p>
            {t.name}
            <button onClick={(e) => changeStatus(t)}>mark done</button>
          </p>
        )}
      </li>
    ));

    return <ul>{list}</ul>;
  }

  return (
    <TodoContext.Provider
      value={{
        theme,
        query,
        cannotAdd,
        searchTodo,
        addTodo,
        deleteTodo,
        listTodos,
      }}
    >
      <button onClick={handleTheme}>change theme</button>
      <Dummy />
    </TodoContext.Provider>
  );
}
