import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Form from './components/Form'


const App = () => {

	const [persons, setPersons] = useState([
		{name: 'Arto Hellas', number: '040-1231244'},
		{name: 'Ada Lovelace', number: '39-44-5323523'},
		{name: 'Dan Abramov', number: '12-43-234345'},
		{name: 'Mary Poppendieck', number: '39-23-6423122'}
	])

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')
	const handleNameField = (event) => setNewName(event.target.value)
	const handleNumberField = (event) => setNewNumber(event.target.value)
	const handleFilterField = (event) => setFilter(event.target.value)

	function checker(person, newName, newNumber) {
		if (person.name.toLowerCase() === newName.toLowerCase()) {
			return false
		}
		else if (person.number === newNumber) {
			return false
		}
		return true
	}

	function addName(event) {
		event.preventDefault()
		const Name = {
			name: newName,
			number: newNumber
		}
		if (persons.every(person => checker(person, newName, newNumber))) {
			setPersons(persons.concat(Name))
			setNewName('')
			setNewNumber('')
			console.log('added name:', newName, 'number:', newNumber)
		}
		else {
			alert(`${newName} or ${newNumber} already exists!`)
			setNewName('')
			setNewNumber('')
			console.log(`${newName} or ${newNumber} already existed!`)
		}
	}

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter	value={filter}
					filterHandler={handleFilterField}
			/>
			<Form	submit={addName}
					nameValue={newName}
					handleName={handleNameField}
					numberValue={newNumber}
					handleNumber={handleNumberField}
			/>
			<h2>Numbers</h2>
			{persons.map(person => <div key={person.name}><Persons person={person} filter={filter}/></div>)}
		</div>
	)
}

export default App
