import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from '../actions/weather.actions';

export const featureKey = 'weather';

export interface State {
  currentDate: Date;
  weather: string;
  location: string;
  loadingWeather: boolean;
}

export const initialState: State = {
  currentDate: new Date(),
  weather: 'Unknown weather',
  location: 'Unknown location',
  loadingWeather: false
}

export const reducer = createReducer(
  initialState,
  on(
    WeatherActions.loadWeather,
    (state) => { return { ...state, loadingWeather: true } }),
  on(
    WeatherActions.loadWeatherSuccess,
    (state, payload: { forecast: string }) => {
      return { ...state, weather: payload.forecast, loadingWeather: false }
    })
);
