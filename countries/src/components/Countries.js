import React from 'react'
import List from './List'
import Country from './Country'

const SearchHelper = (props) => <div><p>{props.text}</p></div>

const Countries = ({countries, filter, weather, setWeather}) => {

	function getMatch(country, keyword) {
		if (country.name.toLowerCase().includes(filter.toLowerCase())) {
			return true
		}
		return false
	}

	const filtered = countries.filter(country => getMatch(country, filter))

	if (filtered.length === 1) {
		return (
			<Country country={filtered[0]} weather={weather} setWeather={setWeather}/>
		)
	}
	else if (filtered.length > 10) {
		return (
			<SearchHelper text={'Too much data to show.'}/>
		)
	}
	else if (filtered.length > 1 && filtered.length <= 10) {
		return (
				<List data={filtered}/>
		)
	}
	else {
		return (
			<SearchHelper text={'Search yielded 0 results.'}/>
		)
	}
}

export default Countries