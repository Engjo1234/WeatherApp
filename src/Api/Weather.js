import axios from "axios";

const API_KEY = "4c316cda1a404a54929201733232711";  // paste your key here
const BASE_URL = "https://api.weatherapi.com/v1";

export function get(endpoint, params = "") {
  // ✅ endpoint زي "/forecast.json"
  // ✅ params زي "&q=Tanta&days=7&aqi=no&alerts=no"
  const url = `${BASE_URL}${endpoint}?key=${API_KEY}${params}`;
  return axios.get(url);
}


export function getCurrentWeather(city = "Tanta") {
  return get("/forecast.json", `&q=${city}&days=7&aqi=no&alerts=no`);
}

// ✅ Forecast لأي مدينة
export function getForecast(city, days = 7) {
  return get("/forecast.json", `&q=${city}&days=${days}&aqi=no&alerts=no`);
}

// ✅ Search Cities
export function searchCities(query) {
  return get("/search.json", `&q=${query}`);
}