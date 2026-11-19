// main.js: hämtar elementen, kopplar ihop api.js och render.js, och håller reda på läget.
import { searchCities, getWeather } from './api.js';
import { setStatus, renderCities, renderWeather, renderFavorite, renderFavoriteError } from './render.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search');
const searchStatus = document.querySelector('#search-status');
const cityList = document.querySelector('#cities');
const weatherSection = document.querySelector('#weather-section');
const weatherStatus = document.querySelector('#weather-status');
const weatherContainer = document.querySelector('#weather');
const favoriteList = document.querySelector('#favorites');

const FAVORITES = [
  { name: 'Stockholm', latitude: 59.33, longitude: 18.07 },
  { name: 'Göteborg', latitude: 57.71, longitude: 11.97 },
  { name: 'Malmö', latitude: 55.61, longitude: 13.0 },
];

// Steg 3: sök
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  // TODO: Visa 'Söker...' i searchStatus, töm listan och anropa searchCities(input.value).
  //       Fyra lägen: laddar, fel ('Något gick fel, försök igen'), tomt ('Hittade ingen ort som heter …')
  //       och lyckat (renderCities med showWeather som onSelect).
});

// Steg 4: visa vädret för en ort
const showWeather = async (city) => {
  // TODO: Visa weatherSection, sätt 'Hämtar vädret...' i weatherStatus,
  //       hämta med getWeather och rendera med renderWeather. Visa ett fel om det inte går.
};

// Steg 5: favoriterna hämtas samtidigt när sidan laddas
const loadFavorites = async () => {
  // TODO: Hämta vädret för alla FAVORITES med Promise.allSettled.
  //       Visa ett kort per ort, med renderFavorite eller renderFavoriteError.
};
loadFavorites();

// Steg 6: avbryt
// TODO: Använd en AbortController så att en ny sökning avbryter den förra.
// TODO: Ge getWeather en timeout på fem sekunder med AbortSignal.timeout(5000),
//       och visa 'Vädertjänsten svarar inte just nu' om den löser ut (error.name === 'TimeoutError').
