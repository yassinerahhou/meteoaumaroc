// Fonction qui récupère les données de l'API
export async function getWeather() {

  const url = 'https://api.openweathermap.org/data/2.5/weather';

  const response = await fetch(url + '?q=London&units=metric&appid=abcdef');

  return response.json();

}
