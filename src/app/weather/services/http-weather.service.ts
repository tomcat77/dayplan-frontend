import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWeatherService {

  private readonly API_KEY = '2e1cc97f94f0c789a543b6268468e0c2'; // TODO move to external config

  constructor(private http: HttpClient) { }

  public loadCurrentWeather(location: string): Observable<WeatherHttpResponse> {
    return this.http.get<WeatherHttpResponse>(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.API_KEY}&lang=ru&units=metric`,
      {
        responseType: 'json',
        observe: 'body'
      });
  }
}

export interface WeatherHttpResponse {
  weather: [
    {
      description: string
    }
  ],
  main: {
    temp: number
  }
}
