// api.js: allt som pratar med Open-Meteo. Ingen DOM här.

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

// Steg 1
// TODO: Skriv fetchJson(url, options). Den ska skicka med options till fetch,
//       kasta new Error(`HTTP ${response.status}`) om svaret inte är ok, och annars returnera JSON:en.
export const fetchJson = async (url, options) => {
  // TODO
};

// Steg 2
// TODO: Skriv searchCities(name, signal).
//       URL: `${GEO_URL}?name=${encodeURIComponent(name)}&count=8&language=sv`
//       Prova i webbläsaren först: hur ser svaret ut när orten finns? När den inte finns?
//       Returnera en array med { id, name, region, country, latitude, longitude }.
//       Hittas inget ska du returnera en tom array.
export const searchCities = async (name, signal) => {
  // TODO
};

// Steg 4
// TODO: Skriv getWeather(latitude, longitude, signal).
//       URL: `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}`
//            + '&current=temperature_2m,wind_speed_10m,weather_code'
//            + '&daily=weather_code,temperature_2m_max,temperature_2m_min'
//            + '&timezone=Europe%2FStockholm&forecast_days=3'
//       Returnera { temperature, wind, code, days }, där days är en array med
//       { date, code, max, min } för varje dag.
export const getWeather = async (latitude, longitude, signal) => {
  // TODO
};
