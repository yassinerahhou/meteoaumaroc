import {Current} from './src/Current.js'
import {Forecast} from './src/Forecast.js'
import {Header} from './src/Header.js' 
import {Footer} from './src/Footer.js'

import {getWeather} from './src/Api.js'

function App() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather().then(data => setWeather(data))
  },[])

  return (
    <div>
      <Header />
      <Current weather={weather}/> 
      <Forecast weather={weather}/>
      <Footer />
    </div>
  )
}

render(<App/>, document.querySelector('#root'))
