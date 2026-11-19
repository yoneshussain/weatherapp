# 🌦️ Vädret: en dataladdare mot Open-Meteo

Ni bygger en liten väderapp i vanlig JavaScript med moduler. Den söker efter en ort, visar vädret för den, och visar vädret i tre städer direkt när sidan laddas. Allt från veckan kommer till användning: `async` och `await`, felhantering, de tre lägena, `Promise.allSettled`, `AbortController` och `??`.

[Open-Meteo](https://open-meteo.com/) är gratis, kräver ingen nyckel och tillåter anrop från webbläsaren.

I nästa vecka flyttar vi in appen i ett Vite-projekt med ESLint. Spara den.

## Kom igång

Öppna mappen i VS Code och starta Live Server. Ha DevTools öppet, med både **Console** och **Network**.

Filerna i `js`:

| Fil | Ansvar |
|---|---|
| `api.js` | Allt som pratar med Open-Meteo. Ingen DOM här |
| `render.js` | Skapar element. Ingen fetch här |
| `main.js` | Hämtar elementen, kopplar ihop de andra filerna och håller reda på läget |
| `weather-codes.js` | Färdig. Översätter Open-Meteos väderkoder till text |

## Steg

### Steg 1: fetchJson

Skriv `fetchJson(url, options)` i `api.js`. Den kastar ett fel när svaret inte är ok, och skickar med `options` till `fetch` så att ni kan avbryta i steg 6.

### Steg 2: sök efter en ort

Klistra in `https://geocoding-api.open-meteo.com/v1/search?name=Lund&count=8&language=sv` i webbläsaren och titta på svaret. Prova sedan med en ort som inte finns. Vad saknas då?

Skriv `searchCities(name, signal)` så att den returnerar en array med `{ id, name, region, country, latitude, longitude }`, eller en tom array.

### Steg 3: sökformuläret

I `main.js`: när formuläret skickas visas ett av fyra lägen.

- **Laddar:** "Söker..."
- **Fel:** "Något gick fel, försök igen."
- **Tomt:** "Hittade ingen ort som heter …"
- **Lyckat:** en knapp per ort, via `renderCities` i `render.js`.

### Steg 4: vädret

Skriv `getWeather` i `api.js` och `renderWeather` i `render.js`. När man klickar på en ort visas temperatur, vind, väder och de kommande tre dagarna.

### Steg 5: tre städer samtidigt

När sidan laddas hämtas vädret för Stockholm, Göteborg och Malmö samtidigt med `Promise.allSettled`. Om en av dem inte svarar ska de andra två ändå visas.

Prova: stäng av nätet i Network-fliken (**Offline**) och ladda om. Vad ser användaren?

### Steg 6: avbryt och timeout

- En ny sökning avbryter den förra med `AbortController`. Ett avbrutet anrop är inget fel och ska inte visas som ett.
- `getWeather` får en timeout på fem sekunder med `AbortSignal.timeout(5000)`. Löser den ut visas "Vädertjänsten svarar inte just nu."

Prova: sätt **Slow 3G** i Network-fliken och sök två gånger snabbt efter varandra.

## Om ni hinner

- Sök medan man skriver, med `input`-eventet. Vänta 300 ms efter sista tangenttrycket (debounce) och avbryt förra sökningen.
- En knapp "Försök igen" när något har gått fel.
- Spara senast visade ort i `localStorage` och visa den när sidan laddas.
- Byt ut texten mot en ikon per väderkod, med en `alt`-text.

## Inför nästa vecka

Pusha appen till ett eget repo på GitHub. På tisdag i v48 flyttar vi in den i ett Vite-projekt.
