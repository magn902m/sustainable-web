// GET Carbon API

export async function getCarbonApi(url) {
  // console.log(url);
  if (url.includes(".json")) {
    const response = await fetch(url);
    const data = await response.json();

    const cleanData = {
      url: data.url,
      industry: industry.value,
      cleanerThan: data.cleanerThan * 100,
      green: data.green,
      grams_co2: data.statistics.co2.grid.grams + data.statistics.co2.renewable.grams,
    };

    return cleanData;
  } else {
    const carbonApi = `https://kea-alt-del.dk/websitecarbon/site/?url=https://www.${url}`;
    const response = await fetch(carbonApi);
    const data = await response.json();

    const cleanData = {
      url: data.url,
      industry: industry.value,
      cleanerThan: data.cleanerThan * 100,
      green: data.green,
      grams_co2: data.statistics.co2.grid.grams + data.statistics.co2.renewable.grams,
    };

    return cleanData;
  }
}

// GET PageSpeed API

export async function getPageSpeedApi(url) {
  // console.log(url);
  if (url.includes(".json")) {
    const response = await fetch(url);
    const data = await response.json();

    const cleanData = {
      images: data.lighthouseResult.audits["resource-summary"].details.items.find(
        (obj) => obj.resourceType === "image"
      ).requestCount,
    };

    return cleanData;
  } else {
    const pageSpeedApi =
      "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.URLREPLACE&key=AIzaSyAeLQjn58Z5N3995NeAD_kN3VxXA92j-1M";

    const pageSpeedURL = pageSpeedApi.replace("URLREPLACE", url);
    const response = await fetch(pageSpeedURL);
    const data = await response.json();

    const cleanData = {
      images: data.lighthouseResult.audits["resource-summary"].details.items.find(
        (obj) => obj.resourceType === "image"
      ).requestCount,
    };

    return cleanData;
  }
}
