import { useEffect, useState } from "react";

import axios from "axios";

export default function Axios() {
  const [comm, setComm] = useState(null);

  axios.interceptors.request.use(
    function (config) {
      console.log("sending request");
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      console.log("getting response");
      if (response.status === 200) {
        return { success: true, json: response.data.data.communication };
      }
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  async function getData() {
    try {
      const response = await axios.get("/data.json");
      console.log(response);
      setComm(response.json);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleClick() {
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
        },
        { timeout: 500 }
      );
      console.log(response);
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        console.error("Request timed out");
      } else {
        console.error(error);
      }
    }
  }

  // const handleUpdate = async () => {
  //   try {
  //     const response = await axios.put(
  //       "https://jsonplaceholder.typicode.com/posts/1",
  //       {
  //         title: "Updated Title",
  //         body: "This is the updated body of the post",
  //       }
  //     );
  //     console.log("Updated Post:", response);
  //   } catch (error) {
  //     console.error("Error updating post:", error);
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ padding: "1em" }}>
      <p>{comm && comm.callHeading}</p>
      <button
        onClick={handleClick}
        // onClick={handleUpdate}
      >
        Send Data
      </button>
    </div>
  );
}

// Feature	                Fetch	                              Axios

// Ease of Use	            Manual parsing	                    Automatic parsing
// Error Handling	          Requires response.ok check	        Rejects on HTTP errors
// Data Transformation	    Manual JSON parsing	                Automatic JSON parsing
// Timeout Handling	        Requires AbortController	          Built-in timeout option
// Request Interceptors     Not supported	                      Supported
// Request Cancellation	    AbortController	                    CancelToken
// Query Parameters	        Manual string building	            params option
// Upload/Download      	  Requires extra code	                Built-in tracking
// CORS Handling	          Requires credentials: 'include'	    withCredentials: true
// Node.js Support	        Needs node-fetch	                  Works natively
