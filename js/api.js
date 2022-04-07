// GET Carbon API

export async function getCarbonApi(url) {
  console.log(url);
  const carbonApi = "https://kea-alt-del.dk/websitecarbon/site/?url=";

  const response = await fetch(carbonApi + url);
  const data = await response.json();

  return data;
}

// GET PageSpeed API

export async function getPageSpeedApi(url) {
  const pageSpeedApi =
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=URLREPLACE&key=AIzaSyAeLQjn58Z5N3995NeAD_kN3VxXA92j-1M";

  const pageSpeedURL = pageSpeedApi.replace("URLREPLACE", url);

  const response = await fetch(pageSpeedURL);
  const data = await response.json();

  return data;
}
