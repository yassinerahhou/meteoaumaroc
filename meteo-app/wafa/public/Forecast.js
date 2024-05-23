export default function Forecast({ weather }) {

  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetchForecast(weather.coord) 
  }, [weather])

  async function fetchForecast(coordinates) {
    // Appel API forecast
    // ...
  }

  return (
    <div className="forecast">
      {forecast && 
        forecast.list.map(day => (
          <DailyForecast key={day.dt} data={day} />
        ))
      }
    </div>
  )

}

function DailyForecast({ data }) {
  // Afficher contenu de la prévision
  // ...
}
