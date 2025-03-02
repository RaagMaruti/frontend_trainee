import { useParams } from "react-router-dom";

export default function Bio() {
    const { name, team } = useParams();
	return (
		<>
			bio of author - {name}, from {team}
		</>
	);
}
