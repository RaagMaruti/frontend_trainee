import React, {
  useEffect,
  useState,
  useOptimistic,
  useTransition,
} from "react";
import axios from "axios";

const App = () => {
  const [comm, setComm] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [dis, setDis] = useState(0);
  const [reqCount, setReqCount] = useOptimistic(dis, (curr, opt) => curr + opt);

  axios.interceptors.request.use(
    (config) => {
      console.log("Sending request...");
      config.headers.Authorization = "my token";
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => {
      console.log("Getting response...");
      if (response.status === 200) {
        return { success: true, json: response.data.data.communication };
      }
      return response;
    },
    (error) => Promise.reject(error)
  );

  async function getData() {
    startTransition(() => {
      setReqCount(1);
    });

    try {
      const response = await axios.get("/data.json");
      console.log(response);
      setComm(response.data);
      setDis((d) => d + 1);
    } catch (error) {
      console.error(error);
      setReqCount(-1);
    }
  }

  async function handleClick() {
    startTransition(() => {
      setReqCount(1);
    });

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          name: "raag joshi",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 1000,
        }
      );
      setDis((d) => d + 1);
      console.log(response);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.error("Request timed out");
      } else {
        console.error(error);
      }
      setReqCount(-1);
    }
  }

  useEffect(() => {
    console.log("mujjj", reqCount);
  }, [reqCount]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "1em" }}>
      <p>{comm && comm.callHeading}</p>
      <button onClick={handleClick} disabled={isPending}>
        Send Data {isPending && "(Updating...)"}
      </button>
    </div>
  );
};

export default App;

// optimistic does not have a typical state, it wont be updated on change or render, for that use separte state
