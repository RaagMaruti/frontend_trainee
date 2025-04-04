import { Link } from "react-router-dom";
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
			<Link to="/imparative">Imparative</Link>
			<Link to="/example">Example</Link>
			<Link to="/portal">Portal</Link>
			{/* <Link to="/axios">Axios</Link> */}
			{/* <Link to="/action">Action</Link> */}
		</nav>
	);
}
