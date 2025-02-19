import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState(() => {
		return JSON.parse(localStorage.getItem("todos")) || [];
	});

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text) => {
		setTodos([...todos, { id: Date.now(), text, completed: false }]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	return (
		<TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
			{children}
		</TodoContext.Provider>
	);
};
