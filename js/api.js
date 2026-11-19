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
    region: result.admin1 ?? result.country_code,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
  }));
};

// Steg 4
// TODO: Skriv getWeather(latitude, longitude, signal).
// URL: `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}`
//            + '&current=temperature_2m,wind_speed_10m,weather_code'
//            + '&daily=weather_code,temperature_2m_max,temperature_2m_min'
//            + '&timezone=Europe%2FStockholm&forecast_days=3'
//       Returnera { temperature, wind, code, days }, där days är en array med
//       { date, code, max, min } för varje dag.
export const getWeather = async (latitude, longitude, signal) => {
  // TODO
  const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FStockholm&forecast_days=3`;

  const data = await fetchJson(url);

  if (!data) {
    console.log("data undefined");
    return {};
  }

  console.log("found weather data");
  console.log(data);

  return {
    temprature: `${Math.round(data.current.temperature_2m)}${data.current_units.temperature_2m}`,
    wind: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
    code: data.current.weather_code,
    days: [
      {
        date: data.daily.time[0],
        code: data.daily.weather_code[0],
        max: `${Math.round(data.daily.temperature_2m_max[0])}°C`,
        min: `${Math.round(data.daily.temperature_2m_min[0])}°C`,
      },
      {
        date: data.daily.time[1],
        code: data.daily.weather_code[1],
        max: `${Math.round(data.daily.temperature_2m_max[1])}°C`,
        min: `${Math.round(data.daily.temperature_2m_min[1])}°C`,
      },
      {
        date: data.daily.time[2],
        code: data.daily.weather_code[2],
        max: `${Math.round(data.daily.temperature_2m_max[2])}°C`,
        min: `${Math.round(data.daily.temperature_2m_min[2])}°C`,
      },
    ],
  };
};

// {
//     "latitude": 59.3289,
//     "longitude": 18.072357,
//     "generationtime_ms": 0.17201900482177734,
//     "utc_offset_seconds": 3600,
//     "timezone": "Europe/Stockholm",
//     "timezone_abbreviation": "GMT+1",
//     "elevation": 24,
//     "current_units": {
//         "time": "iso8601",
//         "interval": "seconds",
//         "temperature_2m": "°C",
//         "wind_speed_10m": "km/h",
//         "weather_code": "wmo code"
//     },
//     "current": {
//         "time": "2026-11-19T21:15",
//         "interval": 900,
//         "temperature_2m": 1,
//         "wind_speed_10m": 9.4,
//         "weather_code": 53
//     },
//     "daily_units": {
//         "time": "iso8601",
//         "weather_code": "wmo code",
//         "temperature_2m_max": "°C",
//         "temperature_2m_min": "°C"
//     },
//     "daily": {
//         "time": [
//             "2026-11-19",
//             "2026-11-20",
//             "2026-11-21"
//         ],
//         "weather_code": [
//             53,
//             51,
//             55
//         ],
//         "temperature_2m_max": [
//             1.3,
//             1.6,
//             2.2
//         ],
//         "temperature_2m_min": [
//             0,
//             0.4,
//             1.3
//         ]
//     }
// }
