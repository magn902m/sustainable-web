import "./sass/style.scss";
import { get, getCarbonApi, build, post, deleteIt, put } from "./js/restdb.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";
const carbonApi = "https://kea-alt-del.dk/websitecarbon/?url=https://facebook.com";

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  regBtn();
  buildList();
}

async function buildList() {
  const database = await get(endpoint, apikey);
  console.log(database);
  build(database);

  // const api = await getCarbonApi(carbonApi);
  // console.log(api);
}

// window.regBtn = regBtn;
async function regBtn() {
  const form = document.querySelector("form");
  const btnPost = document.querySelector("#post");
  const btnPut = document.querySelector("#put");
  const btnDelete = document.querySelector("#delete");

  // const companyInput = form.querySelector("[data-input=company_input]").value;

  // const companyValue = companyInput;

  // document.querySelector("[data-field=company]").textContent = companyValue;

  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   window.location = "print_data.html?id=the id";
  // });

  btnPost.addEventListener("click", () => {
    post(endpoint, apikey);
    buildList();
  });
  btnPut.addEventListener("click", () => {
    put(endpoint, apikey);
    buildList();
  });
  btnDelete.addEventListener("click", () => {
    // const id = this.target.value
    // deleteIt(endpoint, apikey, id);
    deleteIt(endpoint, apikey);
    buildList();
  });
}
