// GET

export async function get(endpoint, apikey) {
  const respone = await fetch(endpoint, {
    method: "get",
    headers: {
      "x-apikey": apikey,
    },
  });
  const data = await respone.json();

  return data;
}

// GET API

export async function getCarbonApi(url) {
  console.log(url);
  const carbonApi = "https://kea-alt-del.dk/websitecarbon/site/?url=";

  const response = await fetch(carbonApi + url);
  const data = await response.json();

  return data;
}

// POST

export async function post(endpoint, apikey, dataObj) {
  // const dataObj = {
  //   company: "Company",
  //   industry: "Industry",
  //   url: "url",
  //   green: false,
  //   cleanerThen: 0.5,
  //   grams_co2: 0.8,
  // };

  const respone = await fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": apikey,
    },
    body: JSON.stringify(dataObj),
  });

  const data = await respone.json();
  console.log(data);

  return data;
}

// DELETE

export async function deleteIt(endpoint, apikey) {
  const id = "6248adb009b5f71a001b8631";
  const respone = await fetch(`${endpoint}/${id}`, {
    method: "delete",
    headers: {
      "x-apikey": apikey,
    },
  });

  const data = await respone.json();
  console.log(data);

  return data;
}

// PUT

export async function put(endpoint, apikey) {
  const dataObj = {
    company: "Cool company",
    industry: "Food",
    url: "www.cool-food.com",
    green: false,
    cleanerThen: 0.6,
    grams_co2: 0.3,
  };

  const id = "6248ad9a09b5f71a001b8630";

  const respone = await fetch(`${endpoint}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": apikey,
    },
    body: JSON.stringify(dataObj),
  });

  const data = await respone.json();
  console.log(data);

  return data;
}
