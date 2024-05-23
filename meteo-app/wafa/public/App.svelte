<script>
  import { onMount } from 'svelte';

  import CurrentWeather from './CurrentWeather.svelte';
  import Forecast from './Forecast.svelte';

  let weather;

  onMount(async () => {
    weather = await fetchWeather();  
  });

  async function fetchWeather() {
    // Call API
  }

</script>

<header>
  <h1>Météo</h1>
</header>

<CurrentWeather {weather}/>

<Forecast {weather}/>

<footer>
  <!-- footer -->
</footer>
