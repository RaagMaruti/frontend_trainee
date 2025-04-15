const originalFetch = fetch;

global.fetch = async (input: RequestInfo) => {
  console.log("fetch req:", input);
  const response = await originalFetch(input);
  console.log("res:", response.status);
  return response;
};
