export function submitData(obj) {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const obj = {
      company: form.elements.name.value,
      url: form.elements.price.value,
      industry: form.elements.industry.value,
      green: form.elements.green.value,
      cleanerThen: Number(form.elements.cleanerThen),
      grams_co2: Number(form.elements.grams_co2.value),
    };

    console.log(obj);

    return obj;
  });
}
