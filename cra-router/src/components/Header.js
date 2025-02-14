import { Link } from "react-router";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/function-lifecycle">Functional-Lifecycle</Link>
      <Link to="/class-lifecycle">Class-Lifecycle</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/app">App</Link>
    </nav>
  );
}
