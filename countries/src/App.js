import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

const App = () => {
	const [filter, setFilter] = useState('')
	const handleFilterField = (event) => setFilter(event.target.value)

	const chooseCountry = (want) => {
		setFilter(want.name)
		console.log(`Picked ${want.name}!`)
	}	

	const [weather, setWeather] = useState([])

	const [countries, setCountries] = useState([])
	useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				console.log('Country data fetch successful!')
				console.log(response.data)
				setCountries(response.data)
		})
	}, [])

	return (
		<div>
			<h1>Country databank</h1>
			<Filter		what={'countries'}
						value={filter}
						filterHandler={handleFilterField}
			/>
			<Countries	countries={countries}
						filter={filter}
						weather={weather}
						setWeather={setWeather}
						chooseCountry={chooseCountry}
			/>
		</div>
	)
}

export default App
