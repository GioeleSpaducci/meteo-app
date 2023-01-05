import { useEffect, useState } from 'react'
import CurrentWeather from './components/CurrentWeather';
import DayWeather from './components/DayWeather';
import Header from './components/Header';
import { nanoid } from 'nanoid';


function App() {
  //state
  const [cityValue, setCityValue] = useState("");
  const [requesting, setRequesting] = useState(false);
  const [weatherData, setWeatherData] = useState({ cityImage: "", list: [], loaded: false, status: "ok" });


  //API call
  useEffect(() => {
    if (requesting) {
      getFiveDaysForecast()
    }
  }, [requesting])


  function handleValueChange(e) {
    setCityValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setRequesting(true);
  }


  //manage API data
  function getFiveDaysForecast() {
    const key = String(import.meta.env.VITE_API_KEY);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const dividedByDayData = { ...data, list: Array.from(Array(5)).map((arr, i) => data.list.slice(i * 8, (i * 8) + 8)) }
        setWeatherData(prevData => { return { ...prevData, loaded: true, status: "ok", ...dividedByDayData } })
        setRequesting(false)
      })
      .catch(() => {
        setWeatherData(prevData => { return { ...prevData, status: "error", loaded: false } })
        setRequesting(false)
      });
  }

  const dayWeatherElements = weatherData.list.map(day => {
    return (
      <DayWeather key={nanoid()} weatherData={day} />
    )
  })

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <Header value={cityValue} onChange={handleValueChange} onSubmit={handleSubmit} />
      {weatherData.loaded &&
        <CurrentWeather currentWeather={weatherData.list[0][0]} cityName={weatherData.city.name} cityImage={weatherData.cityImage} />}
      {!weatherData.loaded && weatherData.status === "ok" &&
        <div className='flex flex-col items-center'>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" />
          <h2>No weather loaded...</h2>
        </div>}
      {weatherData.loaded &&
        <div className='flex w-full max-w-fit overflow-x-scroll gap-8 pb-10 px-4'>
          {dayWeatherElements}
        </div>}
      {weatherData.status === "error" &&
        <div className='flex flex-col items-center'>
          <img src="https://openweathermap.org/img/wn/10d@2x.png" />
          <h2>Something went wrong, try again...</h2>
        </div>}
    </div>
  )
}

export default App