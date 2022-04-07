// GET API

export async function getCarbonApi(url) {
  console.log(url);
  const carbonApi = "https://kea-alt-del.dk/websitecarbon/site/?url=";

  const response = await fetch(carbonApi + url);
  const data = await response.json();

  return data;
}
