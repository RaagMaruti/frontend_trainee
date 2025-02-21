import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import Dummy from "./Dummy";

export const TodoContext = createContext();

export default function TodoLogic() {
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        name: query,
        completed: false,
      },
    ]);
    setQuery("");
  }

  function deleteTodo(value) {
    setTodos(todos.filter((t) => t.id !== value.id));
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
        {t.completed ? <del>{t.name}</del> : <>{t.name}</>}
        <button onClick={(e) => changeStatus(t)}>
          {t.completed ? "mark remaining" : "mark done"}
        </button>
        <button onClick={(e) => deleteTodo(t)}>delete todo</button>
      </li>
    ));

    return <ul>{list}</ul>;
  }

  return (
    <TodoContext.Provider
      value={{
        theme,
        query,
        setQuery,
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
