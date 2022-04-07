// GET Carbon API

export async function getCarbonApi(url) {
  console.log(url);
  const carbonApi = `https://kea-alt-del.dk/websitecarbon/site/?url=https://${url}`;

  // const response = await fetch(carbonApi);
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
}

// GET PageSpeed API

export async function getPageSpeedApi(url) {
  const pageSpeedApi =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=URLREPLACE&key=AIzaSyAeLQjn58Z5N3995NeAD_kN3VxXA92j-1M";

  const pageSpeedURL = pageSpeedApi.replace("URLREPLACE", url);

  console.log(url);
  // const response = await fetch(pageSpeedURL);
  const response = await fetch(url);
  const data = await response.json();

  const cleanData = {
    images: data.lighthouseResult.audits["resource-summary"].details.items.find(
      (obj) => obj.resourceType === "image"
    ).requestCount,
  };

  return cleanData;
}
