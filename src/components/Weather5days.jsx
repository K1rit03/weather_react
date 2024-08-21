import './Weather5days.css'

function Weather5days({ weather5days }) {
    if (!weather5days || !weather5days.list) {
        return <div>Loading...</div>
    }

    // Pegando uma previsão a cada 8 itens (3 horas por previsão * 8 = 24 horas)
    const dailyForecast = weather5days.list.filter((_, index) => index % 8 === 0).slice(0, 5)

    return (
        <div className='weather5days_container'>
            <h2>Previsão para 5 Dias</h2>
            <div className='forecast'>
                {dailyForecast.map((forecast, index) => (
                    <div key={index} className='forecast_item'>
                        <p>{new Date(forecast.dt_txt).toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="weather icon" />
                        <p>{Math.round(forecast.main.temp)}°C</p>
                        <p>{forecast.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weather5days
