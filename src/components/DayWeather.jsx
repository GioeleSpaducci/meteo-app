import { nanoid } from "nanoid";

export default function DayWeather({ weatherData }) {
  const thermometerImg = new URL('../assets/thermometer.png', import.meta.url).href;
  const windImg = new URL('../assets/wind.png', import.meta.url).href;
  const date = new Date(weatherData[0].dt_txt);
  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  const numericDay = new Intl.DateTimeFormat("en-US", { day: "numeric" }).format(date);

  //single hour ui elements
  const hourElement = weatherData.map(hour => {
    const date = new Date(hour.dt_txt)
    return (
      <div key={nanoid()} className="flex w-full items-center justify-between px-3">
        <div className="flex items-center justify-between w-70p">
          {date.getHours()}
          <img className="w-14" src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
        </div>
        <div className="flex items-center w-24">
          <img className="w-5 h-5" src={thermometerImg} />
          <p>{hour.main.temp}°C</p>
        </div>
        <div className="flex items-center w-24">
          <img className="w-5 h-5 mr-1" src={windImg} />
          <p>{hour.wind.speed}m/s</p>
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center w-72 shrink-0 shadow-xl rounded-lg overflow-clip">
      <div className="flex justify-center items-center w-full p-3 bg-purple-500">
        <h2 className="text-white">{weekDay + " " + numericDay}</h2>
      </div>
      {hourElement}
    </div>
  )
}