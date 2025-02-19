import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";

function App() {
  return (
    <TodoProvider>
      <div>
        <h1>TODO App</h1>
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
