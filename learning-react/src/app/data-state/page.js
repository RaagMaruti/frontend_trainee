import { useState } from "react";
import {
  Outlet,
  useNavigate,
  useLocation,
  useSearchParams,
} from "react-router-dom";

export default function Data() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  const p = useSearchParams();
  console.log(p[0].get("team"));

  function handleClick() {
    setShow(true);
    show && navigate("bio/raag/fullstack");
  }

  const lines = [
    "first line",
    "second line",
    "third line",
    "fourth line",
    "fifth line",
  ];

  return (
		<div style={{ padding: "1em" }}>
			<h1>This is the Data Page</h1>
			<button onClick={handleClick}>show data</button>
			{show && (
				<ul>
					{lines.map((i) => (
						<li key={i}>{i}</li>
					))}
				</ul>
			)}
			<Outlet />
		</div>
	);
}
