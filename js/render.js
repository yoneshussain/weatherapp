// render.js: skapar element. Ingen fetch här.
import { describeWeather } from "./weather-codes.js";
import { showWeather } from "./main.js";

// Visa ett läge: laddar, fel eller lyckat
export const setStatus = (element, text, isError = false) => {
  element.textContent = text;
  element.classList.toggle("error", isError);
};

// Steg 3
// TODO: renderCities(list, cities, onSelect) ska visa en knapp per ort med
//       namn, region och land, till exempel "Lund, Skåne län, Sverige".
//       Klick på knappen anropar onSelect(city).
export const renderCities = (list, cities) => {
  // TODO

  cities.forEach((city) => {
    const name = city.name;
    const region = city.region;
    const country = city.country;

    const fullText = `${name}, ${region}, ${country}`;
    const cityButton = document.createElement("button");
    cityButton.textContent = fullText;
    list.appendChild(cityButton);

    cityButton.addEventListener("click", () => {
      showWeather(city);
    });
  });
};
// Steg 4
// TODO: renderWeather(container, city, weather) ska visa ortens namn, temperaturen,
//       vinden, describeWeather(weather.code) och de tre dagarna med max och min.
export const renderWeather = (container, city, weather) => {
  // TODO
  const name = city.name;
  const temp = weather.temprature;
  const wind = weather.wind;
  const code = describeWeather(weather.code);

  const today = document.createElement("h2");
  const nameElement = document.createElement("h4");
  const tempElement = document.createElement("h4");
  const windElement = document.createElement("p");
  const weatherElement = document.createElement("p");

  today.textContent = "Idag:";
  nameElement.textContent = name;
  tempElement.textContent = temp;
  windElement.textContent = wind;
  weatherElement.textContent = code;

  container.append(
    today,
    nameElement,
    tempElement,
    windElement,
    weatherElement,
  );

  weather.days.forEach((day) => {
    const date = day.date;
    const maxTemp = day.max;
    const minTemp = day.min;
    const code = describeWeather(day.code);

    const dayElement = document.createElement("h2");
    const maxElement = document.createElement("h4");
    const minElement = document.createElement("h4");
    const weatherElement = document.createElement("p");

    dayElement.textContent = date;
    maxElement.textContent = maxTemp;
    minElement.textContent = minTemp;
    weatherElement.textContent = code;

    container.append(dayElement, maxElement, minElement, weatherElement);
  });
};

// Steg 5
// TODO: renderFavorite(city, weather) ska returnera ett li-kort med ort, temperatur och väder.
//       renderFavoriteError(city) ska returnera ett li-kort som säger att vädret inte kunde hämtas.
export const renderFavorite = (city, weather) => {
  // TODO
};

export const renderFavoriteError = (city) => {
  // TODO
};
