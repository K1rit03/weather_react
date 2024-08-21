import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfo from './components/Weatherinfo'
import Weather5days from './components/Weather5days'

function App() {
  const [weather, setWeather] = useState(null)        // Iniciando como null
  const [weather5days, setWeather5days] = useState(null)
  const [error, setError] = useState(null)            // Para tratar erros
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "d611a2797b46e23d64c8905463b8b594"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    try {
      const apiInfo = await axios.get(url)
      const apiInfo5days = await axios.get(url5days)

      setWeather(apiInfo.data)
      setWeather5days(apiInfo5days.data)
      setError(null)  // Limpar erros quando a requisição for bem-sucedida
    } catch (err) {
      setError('Não foi possível encontrar a cidade. Tente novamente.')
      setWeather(null)   // Resetar os dados de estado
      setWeather5days(null)
    }
  }

  return (
    <>
      <div className='container'>
        <h1>DevClub Previsão</h1>
        <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
        <button onClick={searchCity}>Buscar</button>

        {/* Exibir erro, se houver */}
        {error && <p>{error}</p>}

        {/* Renderizar Weatherinfo se houver dados */}
        {weather ? <Weatherinfo weather={weather} /> : <p>Digite o nome da cidade para obter a previsão.</p>}
        {weather5days ? <Weather5days weather5days={weather5days} /> : null}
      </div>
    </>
  )
}

export default App
