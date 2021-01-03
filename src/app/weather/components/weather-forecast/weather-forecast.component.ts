import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app';
import { loadWeather } from '../../actions/weather.actions';
import { isLoadingSelector, locationSelector, weatherSelector } from '../../selectors/weather.selector';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit, OnDestroy {

  public loading$: Observable<boolean>;
  public weather$: Observable<string>;
  public location$: Observable<string>;

  private locationSubs: Subscription;
  private currentLocation: string;

  constructor(private store: Store<AppState>) { 
    this.loading$ = this.store.select(isLoadingSelector);
    this.weather$ = this.store.select(weatherSelector);
    this.location$ = this.store.select(locationSelector);

    this.locationSubs = this.location$.subscribe(s => this.currentLocation = s);
  }
    
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.locationSubs.unsubscribe();
  }
  
  refreshWeather() {
    this.store.dispatch(loadWeather({ location: this.currentLocation }));
  }
}
