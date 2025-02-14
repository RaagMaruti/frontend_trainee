import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 576) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return { data, mobile };
}

export default function Custom() {
  const { data, mobile } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
      <p>Fetched on a {mobile ? "mobile" : "desktop"}.</p>
    </div>
  );
}
