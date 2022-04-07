import "./sass/style.scss";
import { get, post, deleteIt, put } from "./js/restdb.js";
import { getCarbonApi, getPageSpeedApi } from "./js/api.js";
import { build } from "./js/portraying_data.js";
import { submitInput } from "./js/collecting_data.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";

window.addEventListener("DOMContentLoaded", setup);
function setup() {
  regBtn();
  buildList();
  // console.log(buildList);
  // buildList();
}

async function buildList() {
  const data = await get(endpoint, apikey);
  document.querySelector("#data_input_section").innerHTML = "";
  data.forEach(build);

  const url = "https://www.facebook.com";
  const getCarbonData = await getCarbonApi(url);
  const getPageSpeedData = await getPageSpeedApi(url);
  console.log("getCarbonData", getCarbonData, "getPageSpeedData", getPageSpeedData);
}

async function regBtn() {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(submitInput());
    post(endpoint, apikey, submitInput());
    buildList();

    // window.location = `results.html?url=${payload.url}&industry=${payload.industry}`;
    // window.location = `print_data.html?url=${payload.url}&industry=${payload.industry}`;

    buildList();
  });
}
