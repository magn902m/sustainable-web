import "./sass/style.scss";
import { get, post, deleteIt, put } from "./js/restdb.js";
import { getCarbonApi, getPageSpeedApi } from "./js/api.js";
import { build } from "./js/portraying_data.js";
import { submitInput } from "./js/collecting_data.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";

window.addEventListener("DOMContentLoaded", setup);
function setup() {
  console.log("setup");
  regBtn();
  // buildList();
  // console.log(buildList);
  // buildList();
}

async function buildList() {
  const data = await get(endpoint, apikey);
  document.querySelector(".result_wrapper").innerHTML = "";
  data.forEach(build);
}

async function regBtn() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const urlInput = form.elements.url.value;
    const domain = urlInput.split(".")[0];

    // const urlCarbon, urlPageSpeed = "https://www.facebook.com";
    const urlCarbon = `./json/${domain}Carbon.json`;
    const urlPageSpeed = `./json/${domain}PageSpeed.json`;

    // console.log(urlCarbon);
    // const getCarbonData = await getCarbonApi(urlCarbon);
    // const getPageSpeedData = await getPageSpeedApi(urlPageSpeed);
    // console.log("getCarbonData", getCarbonData);
    // console.log("getPageSpeedData", getPageSpeedData);

    console.log(urlCarbon);
    const getCarbonData = await getCarbonApi(urlCarbon);
    const getPageSpeedData = await getPageSpeedApi(urlPageSpeed);
    console.log("getCarbonData", getCarbonData);
    console.log("getPageSpeedData", getPageSpeedData);

    const fullObject = combineData(getCarbonData, getPageSpeedData);
    // console.log(combineData(getCarbonData, getPageSpeedData));
    // post(endpoint, apikey, submitInput());
    // post(endpoint, apikey, fullObject);

    buildList();

    // window.location = `results.html?url=${payload.url}&industry=${payload.industry}`;
    // window.location = `print_data.html?url=${payload.url}&industry=${payload.industry}`;
  });
}

function combineData(getCarbonData, getPageSpeedData) {
  const fullObj = {
    url: getCarbonData.url,
    industry: getCarbonData.industry,
    cleanerThan: getCarbonData.cleanerThan,
    green: getCarbonData.green,
    grams_co2: getCarbonData.grams_co2,
    images: getPageSpeedData.images,
  };

  return fullObj;
}
