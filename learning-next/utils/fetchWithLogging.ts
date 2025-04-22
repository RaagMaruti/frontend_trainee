const originalFetch = fetch;

let globalReqNum = 0;

global.fetch = async (input: RequestInfo, init?: RequestInit) => {
  console.log("Global Request Number: ", ++globalReqNum);

  console.log("request:", {
    url: input,
    method: init?.method || "GET",
    body: init?.body || {},
  });

  const response = await originalFetch(input, init);

  console.log("response:", {
    status: response.status,
    url: response.url,
  });

  return response;
};
