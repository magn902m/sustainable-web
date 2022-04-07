// BUILD

export function build(item) {
  const clone = document.querySelector("template#api_data").content.cloneNode(true);

  // set clone data
  // clone.querySelector("[data-field=company]").textContent = item.company;
  clone.querySelector("[data-field=url]").textContent = item.url;
  // clone.querySelector("[data-field=url]").setAttribute("herf", item.url);
  clone.querySelector("[data-field=industry]").textContent = `${item.industry}`;
  // clone.querySelector("[data-field=green]").textContent = `${item.green}`;
  // clone.querySelector("[data-field=cleanerThen]").textContent = `${item.cleanerThen}%`;
  // clone.querySelector("[data-field=grams_co2]").textContent = `${item.grams_co2} grams`;

  // append clone to list
  document.querySelector("template#api_data").appendChild(clone);
}

/*export function build(dataArr) {
  document.querySelector("#data_input_section .section_wrapper").innerHTML = "";

  dataArr.forEach((item) => {
    const clone = document.querySelector("template#api_data").content.cloneNode(true);

    // set clone data
    // clone.querySelector("[data-field=company]").textContent = item.company;
    clone.querySelector("[data-field=url]").textContent = item.url;
    // clone.querySelector("[data-field=url]").setAttribute("herf", item.url);
    clone.querySelector("[data-field=industry]").textContent = `${item.industry}`;
    // clone.querySelector("[data-field=green]").textContent = `${item.green}`;
    // clone.querySelector("[data-field=cleanerThen]").textContent = `${item.cleanerThen}%`;
    // clone.querySelector("[data-field=grams_co2]").textContent = `${item.grams_co2} grams`;

    // append clone to list
    document.querySelector("template#api_data").appendChild(clone);
  });
}*/

// BUILD

export function buildAPI() {
  document.querySelector("#api_input_section .section_wrapper").innerHTML = "";

  dataArr.forEach((item) => {
    const clone = document.querySelector("template#api_data").content.cloneNode(true);
    clone.querySelector("[data-field=green]").textContent = `${item.green}`;
    clone.querySelector("[data-field=cleanerThen]").textContent = `${item.cleanerThen}%`;
    clone.querySelector("[data-field=grams_co2]").textContent = `${item.grams_co2} grams`;

    // append clone to list
    document.querySelector("#data_input_section .section_wrapper").appendChild(clone);
  });
}
