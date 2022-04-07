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

// POST

export async function post(endpoint, apikey, payload) {
  //Object
  // console.log("post payload", payload);

  const respone = await fetch(endpoint, {
    method: "post",
    headers: {
      "x-apikey": apikey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await respone.json();
  console.log(data);
  // return data;
}

// DELETE

export async function deleteIt(endpoint, apikey, id) {
  const respone = await fetch(`${endpoint}/${id}`, {
    method: "delete",
    headers: {
      "x-apikey": apikey,
    },
  });

  const data = await respone.json();
  console.log(data);
}

// PUT

export async function put(endpoint, apikey, id) {
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
