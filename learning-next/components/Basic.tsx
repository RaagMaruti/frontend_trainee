"use client";

import { useEffect, useState } from "react";
import fetchPost from "../utils/fetchPost";

export default function Basic() {
  const [data, setData] = useState<{ id: number; title: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchPost(10);
      setData(result);
    };

    fetchData();
  }, []);

  return <p>{data ? `Basic, ${data.id}` : "Loading..."}</p>;
}
