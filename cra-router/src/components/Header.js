import { Link } from "react-router";

export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/lifecycle">Functional-Lifecycle</Link>
    </nav>
  );
}
