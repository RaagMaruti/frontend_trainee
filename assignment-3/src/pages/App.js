import { useContext } from "react";
import { TodoContext } from "./TodoLogic";

export default function App() {
  const { theme, query, setQuery, addTodo, listTodos } =
    useContext(TodoContext);

  return (
    <div>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={addTodo}>add todo</button>
      </div>

      <h3>list of all todos:</h3>
      {theme === "light" ? (
        <div>{listTodos()}</div>
      ) : (
        <div style={{ color: "whitesmoke", backgroundColor: "gray" }}>
          {listTodos()}
        </div>
      )}
    </div>
  );
}
