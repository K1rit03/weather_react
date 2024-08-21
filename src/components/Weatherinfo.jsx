import './Weatherinfo.css'

function Weatherinfo({ weather }) {
    return (
        <div className='weather_container' >
            <h2>{weather.name}</h2>
            <div className='weather_info'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
                <p className='temperature'>{Math.round(weather.main.temp)}°C</p>
            </div>
            <p className='description'>{weather.weather[0].description}</p>
            <div className='details'>
                <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C </p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Pressão: {weather.main.pressure} hPa</p>
            </div>
        </div>
    )
}

export default Weatherinfo
