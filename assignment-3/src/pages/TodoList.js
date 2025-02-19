import { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useContext(TodoContext);
  const [search, setSearch] = useState("");
  const [newTodo, setNewTodo] = useState("");

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
      {filteredTodos.length === 0 && search && (
        <div>
          <p>No results found. Add new?</p>
          <input
            type="text"
            placeholder="New TODO"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={() => addTodo(newTodo)}>Add</button>
        </div>
      )}

      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
