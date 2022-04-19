// BUILD

export function build(item) {
  const clone = document.querySelector("template#result_data").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=url]").textContent = item.url;
  clone.querySelector("[data-field=industry]").textContent = `${item.industry}`;
  clone.querySelector("[data-field=cleanerThan]").textContent = `${item.cleanerThan}`;
  // clone.querySelector("[data-field=green]").textContent = `${item.green}`;

  if (item.green === "unknown" || item.green === false) {
    item.green = "not green ❌";
  } else if (item.green === true) {
    item.green = "green ✅";
  }
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

export function httpsURL(urlInput) {
  // console.log(urlInput);

  if (urlInput.includes("https://") && urlInput.includes("www.")) {
    return `${urlInput}`;
  } else if (urlInput.includes("https://")) {
    return `${urlInput}`;
  } else {
    return urlInput;
  }

  // export function httpsURL(urlInput) {
  //   console.log(urlInput);

  //   if (!urlInput.includes("https://") && !urlInput.includes("www.")) {
  //     return `https://www.${urlInput}`;
  //   } else if (!urlInput.includes("https://")) {
  //     return `https://${urlInput}`;
  //   } else {
  //     return urlInput;
  //   }
  // }
}

export function setGaugeValue(cleanValue) {
  // cleanValue = 57;
  // console.log(cleanValue);

  if (cleanValue < 0 || cleanValue > 100) {
    return;
  }
  const gauge = document.querySelector(".gauge");
  gauge.querySelector("[data-field=cleanerThan]").textContent = `${cleanValue} %`;
  gauge.querySelector(".gauge__fill").style.transform = `rotate(${cleanValue / 20}turn)`;
}

export function regBtnChangeData() {
  const bar1 = document.querySelector("#myCalculator_1");
  const bar1Output = document.querySelector("#rangevalue_1");

  //Taking the string, and converting it to a number
  const stringNum = bar1Output.textContent.substring(0, bar1Output.textContent.lastIndexOf(" "));
  bar1Output.textContent = stringNum;
  const realNum = Math.floor(stringNum);

  //Setting the max and value to the number from the api´s
  bar1.max = realNum;
  bar1.value = realNum;

  // bar1.target.value

  bar1.addEventListener("change", (e) => {
    console.log(e.target.value, "images selected");
    const bar1Value = bar1.value;
    const gauge = document.querySelector(".gauge");

    //
    gauge.querySelector("[data-field=cleanerThan]").textContent = `${bar1Value} %`;
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${bar1Value / 20}turn)`;

    // bar1Output.textContent = bar1.value;
  });
}
