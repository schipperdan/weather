import axios from 'axios';

const API_KEY = 'ecd15d8dcfb72007c58e313c4a469fa5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // redux-promise stops the actions when the payload is a promise and once the
    // request finishes, it dispatches a new action of the same type and 
    // unwraps the promise

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


