import "./sass/style.scss";
import { get, getCarbonApi, build, post } from "./js/restdb.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";
const carbonApi = "https://kea-alt-del.dk/websitecarbon/?url=https://facebook.com";

window.addEventListener("DOMContentLoaded", setup);

async function setup() {
  const database = await get(endpoint, apikey);
  const api = await getCarbonApi(carbonApi);

  console.log(database);
  // console.log(api);
  build(database);
  regBtn();
  post();
}

window.regBtn = regBtn;
function regBtn() {
  const form = document.querySelector("form");

  // const companyInput = form.querySelector("[data-input=company_input]").value;

  // const companyValue = companyInput;

  // document.querySelector("[data-field=company]").textContent = companyValue;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location = "print_data.html?id=the id";
  });
}
