import axios from 'axios'
import React, {useEffect} from 'react'
import List from './List'

const Country = ({ country, weather, setWeather }) => {

	const api_key = process.env.REACT_APP_API_KEY
	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
			.then(response => {
				console.log('Weather fetch successful!')
				console.log(response.data.current)
				setWeather(response.data.current)
			})
	}, [country, api_key, setWeather])

	return (
		<div>
			<h2>{country.name}</h2>
			<p>Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<p>Region: {country.region}</p>
			<p>Subregion: {country.subregion}</p>
			<p>Area: {country.area} km^2</p>
			<h3>Languages</h3>
			<List data={country.languages}/>
			<h3>Flag</h3>
			<img src={country.flag} alt='Flag' width='200'/>
			<h3>Weather in {country.capital} at {weather.observation_time}</h3>
			<p>Temperature: {weather.temperature}</p>
			<p>Feels like: {weather.feelslike}</p>
			<p>Wind speed: {weather.wind_speed} m/s</p>
			<p>UV index: {weather.uv_index}</p>
			<p>Clouds: {weather.cloudcover}%</p>
			<p>Pressure: {weather.pressure} hPa</p>
		</div>
	)
}

export default Country