// api.js: allt som pratar med Open-Meteo. Ingen DOM här.

const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search/";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

// Steg 1
// TODO: Skriv fetchJson(url, options). Den ska skicka med options till fetch,
//       kasta new Error(`HTTP ${response.status}`) om svaret inte är ok, och annars returnera JSON:en.
export const fetchJson = async (url, options) => {
  // TODO
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
};

// Steg 2
// TODO: Skriv searchCities(name, signal).
//       URL: `${GEO_URL}?name=${encodeURIComponent(name)}&count=8&language=sv`
//       Prova i webbläsaren först: hur ser svaret ut när orten finns? När den inte finns?
//       Returnera en array med { id, name, region, country, latitude, longitude }.
//       Hittas inget ska du returnera en tom array.
export const searchCities = async (name, signal) => {
  // TODO
  const data = await fetchJson(
    `${GEO_URL}?name=${encodeURIComponent(name)}&count=8&language=sv`,
  );

  // const data = await fetchJson(
  //   `https://geocoding-api.open-meteo.com/v1/search?name=Stockholm&count=8&language=sv`,
  // );

  const results = await data.results;
  console.log(results);

  if (!data.results) {
    console.log("data undefined");
    return [];
  }

  console.log("found data");
  return results.map((result) => ({
    id: result.id,
    name: result.name,
    region: result.admin1,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
  }));
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
