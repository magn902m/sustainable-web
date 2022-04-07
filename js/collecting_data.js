export function submitInput(input) {
  const form = document.querySelector("form");
  const payload = {
    url: form.elements.url.value,
    industry: form.elements.industry.value,
  };

  // console.log("collecting payload", payload);
  input = payload;
  console.log("input", input);

  // window.location = `results.html?url=${payload.url}&industry=${payload.industry}`;
  // window.location = `print_data.html?url=${payload.url}&industry=${payload.industry}`;
  return payload;
}

/*export function submitData(obj) {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const obj = {
      // company: "form.elements.name.value",
      url: form.elements.url.value,
      industry: form.elements.industry.value,
      // green: "form.elements.green.value",
      // cleanerThen: "Number(form.elements.cleanerThen)",
      // grams_co2: "Number(form.elements.grams_co2.value)",
    };

    console.log(obj);

    return obj;
  });
}*/
