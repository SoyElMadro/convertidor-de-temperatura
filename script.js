const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const btnConvertCel = document.getElementById("btn-cel");
const btnConvertFar = document.getElementById("btn-far");

const celDivResult = document.querySelector(".cel-to-far .p-result #result");
const fahrDivResult = document.querySelector(".far-to-cel .p-result #result");

btnConvertCel.addEventListener("click", (event) => {
  event.preventDefault();
  if (celsius.value) celDivResult.textContent = calcCelsius(celsius.value);
});

btnConvertFar.addEventListener("click", (event) => {
  event.preventDefault();
  if (fahrenheit.value)
    fahrDivResult.textContent = calcFahrenheit(fahrenheit.value);
});

const calcCelsius = (celsius) => {
  return ((celsius * 9) / 5 + 32).toFixed(2);
};

const calcFahrenheit = (fahrenheit) => {
  return (((fahrenheit - 32) * 5) / 9).toFixed(2);
};
