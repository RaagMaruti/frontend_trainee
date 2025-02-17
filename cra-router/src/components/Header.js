import { Link } from "react-router";
export default function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
      <Link to="/function-lifecycle">Functional-Lifecycle</Link>
      <Link to="/class-lifecycle">Class-Lifecycle</Link>
      <Link to="/effects">Effects</Link>
      <Link to="/transition">Transition</Link>
      <Link to="/deferred">Deferred</Link>
      <Link to="/custom">Custom</Link>
      <Link to="/form">Form</Link>
      <Link to="/axios">Axios</Link>
    </nav>
  );
}
