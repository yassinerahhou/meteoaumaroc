// export const getWeatherIcon = (iconCode: string): string => {
//   return `http://openweathermap.org/img/wn/${iconCode}.png`;
// };

/* ill try to use costum icons instead of api icons*/
export const getWeatherIcon = (iconCode: string): string => {
  switch (iconCode) {
    case "01d":
      return " fa fa-sun"; // Day clear sky
    case "01n":
      return "fas fa-moon"; // Night clear sky
    case "02d":
      return "fas fa-cloud-sun"; // Day few clouds
    case "02n":
      return "fas fa-cloud-moon"; // Night few clouds
    case "03d":
    case "03n":
      return "fas fa-cloud"; // Scattered clouds
    case "04d":
    case "04n":
      return "fas fa-cloud-meatball"; // Broken clouds
    case "09d":
    case "09n":
      return "fas fa-cloud-showers-heavy"; // Shower rain
    case "10d":
      return "fas fa-cloud-sun-rain"; // Day rain
    case "10n":
      return "fas fa-cloud-moon-rain"; // Night rain
    case "11d":
    case "11n":
      return "fas fa-bolt"; // Thunderstorm
    case "13d":
    case "13n":
      return "fas fa-snowflake"; // Snow
    case "50d":
    case "50n":
      return "fas fa-smog"; // Mist
    default:
      return "fas fa-question-circle"; // Unknown weather
  }
};
