@Injectable({
  //...
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get<WeatherData>(
      'https://api.openweathermap.org/data/2.5/weather?q=London'
    );
  }

}
