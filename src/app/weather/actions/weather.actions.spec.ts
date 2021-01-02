import * as WeatherActions from './weather.actions';

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new WeatherActions.LoadWeather()).toBeTruthy();
  });
});
