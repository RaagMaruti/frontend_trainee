if (typeof window !== "undefined") {
  const originalFetch = window.fetch;
  let globalReqNum = 0;

  window.fetch = async (input: RequestInfo, init?: RequestInit) => {
    console.log("Global Request Number: ", ++globalReqNum);

    console.log("request:", {
      url: input,
      method: init?.method || "GET",
    });

    const response = await originalFetch(input, init);

    console.log("response:", {
      status: response.status,
      url: response.url,
    });

    return response;
  };
}
