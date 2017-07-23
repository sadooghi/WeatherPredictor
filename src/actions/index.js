import axios from 'axios';
const API_KEY = 'ffbade504f237f561a152534c965a87b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //redux-promise is a middleware that works here (middlewares can stop or manipulate actions before they
  // hit any reducer). redux-promise sees this incoming action and its payload property. If the payload is
  // promise, it stops the action entirly and once the request finishes, it dispatches a new action of the
  // same type but with the payload of resolved request, means it unwraps the promise for us

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}