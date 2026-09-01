import { useEffect, useState } from 'react'

const weatherLabels = { 0: 'Despejado', 1: 'Mayormente despejado', 2: 'Parcialmente nublado', 3: 'Nublado', 45: 'Neblina', 48: 'Neblina', 51: 'Llovizna', 53: 'Llovizna', 55: 'Llovizna', 61: 'Lluvia', 63: 'Lluvia', 65: 'Lluvia intensa', 80: 'Chubascos', 81: 'Chubascos', 82: 'Chubascos fuertes', 95: 'Tormenta' }
const fallbackLocation = { latitude: -33.4489, longitude: -70.6693, label: 'SANTIAGO' }

function WeatherClock() {
  const [now, setNow] = useState(() => new Date())
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const controller = new AbortController()
    const loadWeather = async ({ latitude, longitude, label }) => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`, { signal: controller.signal })
        if (!response.ok) throw new Error('No fue posible obtener el clima')
        const data = await response.json()
        setWeather({ temperature: Math.round(data.current.temperature_2m), description: weatherLabels[data.current.weather_code] ?? 'Clima local', label })
      } catch (error) {
        if (error.name !== 'AbortError') setWeather({ unavailable: true, label })
      }
    }
    loadWeather(fallbackLocation)
    return () => controller.abort()
  }, [])

  const date = new Intl.DateTimeFormat('es-CL', { day: '2-digit', month: 'short' }).format(now).toUpperCase()
  const time = new Intl.DateTimeFormat('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now)
  const condition = weather?.unavailable ? 'CLIMA NO DISP.' : weather ? `${weather.temperature}° · ${weather.description}` : 'CARGANDO CLIMA...'

  return <aside className="weather-clock" aria-label="Fecha, hora y clima actual"><div className="clock-reading"><span>{date}</span><strong>{time}</strong></div><div className="weather-reading">{condition}{weather && <small>{weather.label}</small>}</div></aside>
}

export default WeatherClock
