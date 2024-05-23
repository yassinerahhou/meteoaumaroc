<script>
  export let weather;

  let forecast;

  onMount(async () => {
    forecast = await fetchForecast(weather);
  });

</script>

<!-- display forecast -->
