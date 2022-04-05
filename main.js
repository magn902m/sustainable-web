import "./sass/style.scss";
import { get, getCarbonApi, post, deleteIt, put } from "./js/restdb.js";
import { build } from "./js/portraying_data.js";
import { submitData } from "./js/collecting_data.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  regBtn();
  // buildList();
}

async function buildList() {
  const database = await get(endpoint, apikey);
  console.log(database);
  build(database);

  const url = "https://www.facebook.com";
  const api = await getCarbonApi(url);
  console.log(api);
}

// window.regBtn = regBtn;
async function regBtn() {
  const btnPost = document.querySelector("[type='submit']");

  btnPost.addEventListener("submit", () => {
    e.preventDefault();
    const dataObj = submitData(obj);
    post(endpoint, apikey, dataObj);
    window.location = "results.html?id=";
    buildList();
  });

  // const btnPut = document.querySelector("#put");
  // const btnDelete = document.querySelector("#delete");
  // btnPut.addEventListener("click", () => {
  //   put(endpoint, apikey);
  //   buildList();
  // });
  // btnDelete.addEventListener("click", () => {
  //   deleteIt(endpoint, apikey);
  //   buildList();
  // });
}
