"use client";

import { useEffect, useState } from "react";

export async function temp() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/10");
  const data = await res.json();
  return data;
}

export default function Basic() {
  const [data, setData] = useState<{ id: number; title: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await temp();
      setData(result);
    };

    fetchData();
  }, []);

  return <p>{data ? `Basic, ${data.id}` : "Loading..."}</p>;
}
