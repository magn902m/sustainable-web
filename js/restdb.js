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

export async function getCarbonApi(carbonApi) {
  const respone = await fetch(carbonApi);
  const data = await respone.json();

  return data;
}

export function build(dataArr) {
  dataArr.forEach((item) => {
    // document.querySelector("#alcohol_menu_section .section_wrapper").innerHTML = "";

    const clone = document.querySelector("template#api_data").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=company]").textContent = item.company;
    clone.querySelector("[data-field=url]").textContent = item.url;
    // clone.querySelector("[data-field=url]").setAttribute("herf", item.url);
    clone.querySelector("[data-field=industry]").textContent = `${item.industry}`;
    clone.querySelector("[data-field=green]").textContent = `${item.green}`;
    clone.querySelector("[data-field=cleanerThen]").textContent = `${item.cleanerThen}%`;
    clone.querySelector("[data-field=grams_co2]").textContent = `${item.grams_co2} grams`;

    // append clone to list
    document.querySelector("#data_input_section .section_wrapper").appendChild(clone);
  });
}

// POST

// window.post = post;
// document.querySelector("button").addEventListener("click", post);
export async function post(endpoint, apikey) {
  const dataObj = {
    company: "Company",
    industry: "Industry",
    url: "url",
    green: false,
    cleanerThen: 0.5,
    grams_co2: 0.8,
  };

  // fetch(endpoint, {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "x-apikey": apikey,
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  // get();

  const respone = await fetch(endpoint, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": apikey,
    },
    body: JSON.stringify(dataObj),
  });

  const data = await respone.json();

  return data;
}

// DELETE

window.deleteIt = deleteIt;
// https://frontend-54ac.restdb.io/rest/alcohol-menu find id´s here
function deleteIt() {
  const id = "62456f5409b5f71a001af410";
  fetch(`${endpoint}/${id}`, {
    method: "delete",
    headers: {
      "x-apikey": apikey,
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  get();
}

// PUT

window.put = put;
function put() {
  let data = {
    name: "Magnus Special",
    alcohol_free: true,
    price: 75,
    image: "magnus_special.jpg",
  };

  const id = "6245727b09b5f71a001af4e4";
  fetch(`${endpoint}/${id}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": apikey,
    },
    body: JSON.stringify(data),
  })
    .then((d) => d.json())
    .then((t) => console.log(t));
}

get();
