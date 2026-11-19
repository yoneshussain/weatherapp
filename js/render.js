// render.js: skapar element. Ingen fetch här.
import { describeWeather } from './weather-codes.js';

// Visa ett läge: laddar, fel eller lyckat
export const setStatus = (element, text, isError = false) => {
  element.textContent = text;
  element.classList.toggle('error', isError);
};

// Steg 3
// TODO: renderCities(list, cities, onSelect) ska visa en knapp per ort med
//       namn, region och land, till exempel "Lund, Skåne län, Sverige".
//       Klick på knappen anropar onSelect(city).
export const renderCities = (list, cities, onSelect) => {
  // TODO
};

// Steg 4
// TODO: renderWeather(container, city, weather) ska visa ortens namn, temperaturen,
//       vinden, describeWeather(weather.code) och de tre dagarna med max och min.
export const renderWeather = (container, city, weather) => {
  // TODO
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
