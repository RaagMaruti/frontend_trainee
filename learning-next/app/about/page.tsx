"use client";
import { usePathname } from "next/navigation";

export default function Page() {

  const data = fetch("https://jsonplaceholder.typicode.com/posts/", {
		cache: "no-store",
	}); 

  const pathname = usePathname();

  return <div>About page, {pathname}</div>;
}
