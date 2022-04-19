import "./sass/style.scss";
import { get, post, deleteIt, put } from "./js/restdb.js";
import { getCarbonApi, getPageSpeedApi } from "./js/api.js";
import {
  build,
  combineData,
  httpsURL,
  setGaugeValue,
  regBtnChangeData,
} from "./js/portraying_data.js";
// import { toggle } from "./js/footer-toggle";
// import { setGaugeValue } from "./js/result.js";
// import { submitInput } from "./js/collecting_data.js";

const apikey = "6245613d67937c128d7c9394";
const endpoint = "https://frontend-54ac.restdb.io/rest/sustainable-web";

window.addEventListener("DOMContentLoaded", setup);
function setup() {
  console.log("setup");
  regBtn();
  // console.log(buildList);
  // buildList();
}

async function buildList(cleanValue) {
  const data = await get(endpoint, apikey);
  const firstObject = data[0];
  document.querySelector(".result_wrapper").innerHTML = "";
  data.forEach(build);
  // build(firstObject);
  setGaugeValue(cleanValue);
  regBtnChangeData();
}

async function regBtn() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const urlInput = httpsURL(form.elements.url.value);
    console.log("urlInput", urlInput);

    async function useJSONApi(urlInput) {
      const domain = urlInput.split(".")[0];
      const urlCarbon = `./json/${domain}Carbon.json`;
      const urlPageSpeed = `./json/${domain}PageSpeed.json`;
      const getCarbonData = await getCarbonApi(urlCarbon);
      const getPageSpeedData = await getPageSpeedApi(urlPageSpeed);
      const fullObject = combineData(getCarbonData, getPageSpeedData);
      console.log(fullObject);
      return fullObject;
    }

    async function useApi(urlInput) {
      const urlCarbon = urlInput;
      const urlPageSpeed = urlInput;
      const getCarbonData = await getCarbonApi(urlCarbon);
      const getPageSpeedData = await getPageSpeedApi(urlPageSpeed);
      const fullObject = combineData(getCarbonData, getPageSpeedData);
      console.log(fullObject);
      return fullObject;
    }

    // //* useJSONApi *
    // const fullObject = await useJSONApi(urlInput);
    // let cleanValue = fullObject.cleanerThan;
    // console.log(cleanValue);
    // buildList(cleanValue);

    //* useApi *
    const fullObject = await useApi(urlInput);
    console.log(fullObject, "ready to post");
    post(endpoint, apikey, fullObject);
    buildList();

    const loadingPage = document.querySelector(".loading");
    loadingPage.classList.remove("hide");
    setTimeout(() => {
      loadingPage.classList.add("hide");
      window.scrollBy(0, 1000);
    }, 2500);

    // window.location = `results.html?url=${payload.url}&industry=${payload.industry}`;
    // window.location = `print_data.html?url=${payload.url}&industry=${payload.industry}`;
  });
}
