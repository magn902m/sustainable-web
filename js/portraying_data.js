// BUILD

export function build(item) {
  const clone = document.querySelector("template#result_data").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=url]").textContent = item.url;
  clone.querySelector("[data-field=industry]").textContent = `${item.industry}`;
  clone.querySelector("[data-field=cleanerThan]").textContent = `${item.cleanerThan}`;
  clone.querySelector("[data-field=green]").textContent = `${item.green}`;
  clone.querySelector("[data-field=grams_co2]").textContent = `${item.grams_co2} grams`;
  clone.querySelector("[data-field=images]").textContent = `${item.images} Images`;

  // append clone to list
  document.querySelector("#result .result_wrapper").appendChild(clone);
}

export function combineData(getCarbonData, getPageSpeedData) {
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
