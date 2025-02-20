import { useContext } from "react";
import { TodoContext } from "./TodoProvider";

export default function App() {
	const { query, cannotAdd, searchTodo, addTodo, deleteTodo, listTodos } =
		useContext(TodoContext);

	return (
		<div style={{ padding: "1rem" }}>
			<div>
				<input value={query} onChange={(e) => searchTodo(e.target.value)} />
				<button onClick={deleteTodo} disabled={!cannotAdd}>
					delete todo
				</button>
				<button onClick={addTodo} disabled={cannotAdd}>
					add todo
				</button>
			</div>

			<div>
				<h3>list of all todos:</h3>
				{listTodos()}
			</div>
		</div>
	);
}
