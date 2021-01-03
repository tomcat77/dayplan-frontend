import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app";
import { featureKey, State } from "../reducers/weather.reducer";

export const weatherFeatureStateSelector = createFeatureSelector<AppState, State>(featureKey);

export const isLoadingSelector = createSelector(
    weatherFeatureStateSelector,
    (state: State) => state.loadingWeather);

export const weatherSelector = createSelector(
    weatherFeatureStateSelector,
    (state: State) => state.weather);

export const locationSelector = createSelector(
    weatherFeatureStateSelector,
    (state: State) => state.location);