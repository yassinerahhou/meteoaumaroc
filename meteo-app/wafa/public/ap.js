class App {
  constructor() {
    this.currentWeather = new CurrentWeather();
    this.forecast = new Forecast();
  
    this.render();
  }

  async render() {
    const weatherData = await fetchWeather();

    this.currentWeather.render(weatherData);
    this.forecast.render(weatherData);
  }
}

new App();

async function fetchWeather() {
  // Call API
}
