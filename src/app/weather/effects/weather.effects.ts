import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadWeather, loadWeatherFailure, loadWeatherSuccess } from "../actions/weather.actions";
import { HttpWeatherResponse, HttpWeatherService } from "../services/http-weather.service";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class WeatherEffects {
    loadWeather$ = createEffect(() => this.actions$.pipe(
        ofType(loadWeather),
        switchMap(action => {
            return this.httpWeatherService.loadCurrentWeather(action.location)
                .pipe(
                    map((weatherResponse: HttpWeatherResponse) => loadWeatherSuccess({
                        currentTemperature: weatherResponse.main.temp,
                        weatherConditions: weatherResponse.weather[0].description
                    })
                    ),
                    catchError((err) => of(loadWeatherFailure(err.message)))
                );
        })
    )
    );

    constructor(
        private actions$: Actions,
        private httpWeatherService: HttpWeatherService
    ) { }
}