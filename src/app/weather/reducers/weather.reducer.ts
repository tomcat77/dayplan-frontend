import { createReducer, on } from '@ngrx/store';
import * as WeatherActions from '../actions/weather.actions';

export const featureKey = 'weather';

export interface State {
  currentDate: Date;
  weather: string;
  location: string;
  loadingWeather: boolean;
  lastUpdated: Date;
}

export const initialState: State = {
  currentDate: new Date(),
  weather: 'Unknown weather',
  location: 'Moscow',
  loadingWeather: false,
  lastUpdated: null
}

export const reducer = createReducer(
  initialState,
  on(
    WeatherActions.loadWeather,
    (state) => { return { ...state, loadingWeather: true } }),
  on(
    WeatherActions.loadWeatherSuccess,
    (state, payload: { currentTemperature: number, weatherConditions: string }) => {
      return { 
        ...state, 
        weather: `Current temperature: ${payload.currentTemperature}, conditions: ${payload.weatherConditions}`, 
        loadingWeather: false,
        lastUpdated: new Date()
      };
    })
);
