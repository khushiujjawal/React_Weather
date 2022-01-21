import axios from "axios";

const API_KEY = "dfea320d64978f66c6ed2ad3bda9212b";
const URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
