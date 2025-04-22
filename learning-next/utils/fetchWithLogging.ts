const originalFetch = fetch;

global.fetch = async (input: RequestInfo, init?: RequestInit) => {
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
