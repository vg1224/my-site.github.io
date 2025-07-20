function calculatePrice() {
  let siteType = parseInt(document.getElementById("siteType").value);
  let languages = parseInt(document.getElementById("languages").value);
  let animations = parseInt(document.getElementById("animations").value);
  let design = parseInt(document.getElementById("design").value);
  let seo = parseInt(document.getElementById("seo").value);
  let urgency = parseFloat(document.getElementById("urgency").value);

  let total = siteType + languages + animations + design + seo;
  total = total * urgency;

  const currencySymbol = " грн";
  const currentLang = localStorage.getItem("lang") || "uk";

  const label =
    currentLang === "en"
      ? "Estimated price: "
      : currentLang === "ru"
      ? "Ориентировочная стоимость: "
      : "Орієнтовна вартість: ";

  document.getElementById("result").innerText = label + total + currencySymbol;
}

document.addEventListener("DOMContentLoaded", () => {
  const calculateButton = document.getElementById("calculate-button");
  if (calculateButton) {
    calculateButton.addEventListener("click", calculatePrice);
  }
});
