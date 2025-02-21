import { useContext } from "react";
import { TodoContext } from "./TodoLogic";

export default function App() {
  const {
    theme,
    query,
    cannotAdd,
    searchTodo,
    addTodo,
    deleteTodo,
    listTodos,
  } = useContext(TodoContext);

  return (
    <div>
      <div>
        <input value={query} onChange={(e) => searchTodo(e.target.value)} />
        <button onClick={deleteTodo} disabled={!cannotAdd}>
          delete todo
        </button>
        <button onClick={addTodo} disabled={cannotAdd}>
          add todo
        </button>
      </div>

      {theme === "light" ? (
        <div>
          <h3>list of all todos:</h3>
          {listTodos()}
        </div>
      ) : (
        <div style={{ color: "whitesmoke", backgroundColor: "gray" }}>
          <h3>list of all todos:</h3>
          {listTodos()}
        </div>
      )}
    </div>
  );
}
