@Component({
  //...
})
export class AppComponent {

  weather: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather()
      .subscribe(data => {
        this.weather = data;
      });
  }

}
