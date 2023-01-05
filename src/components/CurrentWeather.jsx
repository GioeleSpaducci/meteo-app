export default function CurrentWeather({ currentWeather, cityName, cityImage }) {
  return (
    <div className="flex mb-6 shadow-xl rounded-lg">
      <div className="flex flex-col items-center p-3" style={{ backgroundImage: `url(${cityImage})` }}>
        <h2 className="font-bold">{cityName}</h2>
        <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} />
        <p className="font-bold">{`${Math.round(currentWeather.main.temp)}°C`}</p>
        <p className="font-bold">{currentWeather.weather[0].description}</p>
      </div>
      <div className="rounded-lg p-3 m-2 bg-purple-500 text-white">
        <p>Felt Temp: {Math.round(currentWeather.main.feels_like)}°C</p>
        <p>Min. Temp: {Math.round(currentWeather.main.temp_min)}°C</p>
        <p>Max. Temp: {Math.round(currentWeather.main.temp_max)}°C</p>
        <p>Wind: {currentWeather.wind.speed}m/s</p>
        <p>Humidity: {currentWeather.main.humidity}%</p>
      </div>
    </div>
  )
}