"use client"
import { redirect } from "next/navigation";

export default function Page() {
	return (
		<div>
			Welcome to Learning-Next Web App
			<button
				onClick={() => {
					redirect("/about");
				}}
			>
				Go to about
			</button>
		</div>
	);
}
