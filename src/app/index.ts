import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';
import * as Weather from './weather/reducers/weather.reducer';

export interface AppState {
  [Weather.featureKey]: Weather.State
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
   [Weather.featureKey]: Weather.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
