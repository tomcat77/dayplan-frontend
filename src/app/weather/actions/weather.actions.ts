import { createAction, props } from '@ngrx/store';

export const loadWeather = createAction('[Weather] Load Weather', 
  props<{ location: string }>());
export const loadWeatherSuccess = createAction('[Weather] Load Weather Success',
  props<{ currentTemperature: number, weatherConditions: string }>());
export const loadWeatherFailure = createAction('[Weather] Load Weather Failure',
  props<{ error: string }>());